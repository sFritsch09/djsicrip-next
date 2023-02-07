package ci

import (
	"dagger.io/dagger"
	"universe.dagger.io/docker"
	"universe.dagger.io/docker/cli"
)

dagger.#Plan & {
	client: {
		network: "unix:///var/run/docker.sock": connect: dagger.#Socket
		env: {
			REGISTRY_IMAGETAG: string
			REGISTRY_USER:     string | "_token_"
			REGISTRY_PASS:     dagger.#Secret
			KUBECONFIG:        *"~/.kube/config" | string
		}
		commands: kubeconfig: {
			name: "cat"
			args: ["\(env.KUBECONFIG)"]
			stdout: dagger.#Secret
		}
		filesystem: {
			".": read: {
				contents: dagger.#FS
				include: ["Dockerfile", "pb.dockerfile"]
			}
			"./": read: {
				contents: dagger.#FS
				exclude: [".next", "node_modules", "cue.mod", "README.md", "dagger.cue", "pb.dockerfile"]
			}
		}
	}
	actions: {
		// Next Build
		deps: docker.#Dockerfile & {
			source: client.filesystem."./".read.contents
			platforms: ["linux/amd64"]
			// Use the stage `FROM base as deps`
			target: "deps"
		}
		builder: docker.#Dockerfile & {
			source: client.filesystem."./".read.contents
			platforms: ["linux/amd64"]
			// Use the stage `FROM base as builder`
			target: "builder"
		}
		run: docker.#Dockerfile & {
			source: client.filesystem."./".read.contents
			platforms: ["linux/amd64"]
			// Use the stage `FROM base as run`
			target: "run"
		}
		load: cli.#Load & {
			image: run.output
			host:  client.network."unix:///var/run/docker.sock".connect
			tag:   "djsicrip:0.8.2"
		}
		push: docker.#Push & {
			image: run.output
			dest:  client.env.REGISTRY_IMAGETAG
			auth: {
				username: client.env.REGISTRY_USER
				secret:   client.env.REGISTRY_PASS
			}
		}
		deploy: docker.#Run & {
			always: true
			_img:   docker.#Pull & {
				source: "bitnami/kubectl"
			}
			input: _img.output
			command: {
				// kubectl set image deploy/app-djsicrip app=imageName -n app-djsicrip
				name: "set"
				args: ["image", "deployment", "app-djsicrip", "app=registry.djsicrip.com/webapp/djsicrip:0.9.1", "-n", "app-djsicrip"]
			}
			user:    "root"
			workdir: "/workspace"
			mounts: {
				"/.kube/config": {
					dest:     "/.kube/config"
					type:     "secret"
					contents: client.commands.kubeconfig.stdout
				}
			}
		}
	}
}
