package ci

import (
	"dagger.io/dagger"
	"universe.dagger.io/docker"
	"universe.dagger.io/docker/cli"
	"universe.dagger.io/yarn"
)

dagger.#Plan & {
	client: {
		network: "unix:///var/run/docker.sock": connect: dagger.#Socket
		env: {
			REGISTRY_DOMAIN: string
			REGISTRY_USER:   string | "_token_"
			REGISTRY_PASS:   dagger.#Secret
		}
		filesystem: {
			"./": read: {
				contents: dagger.#FS
				exclude: [".next", "node_modules", "cue.mod", "README.md", "dagger.cue", "Dockerfile", "pb.dockerfile"]
			}
		}
	}
	actions: {
		// Next Build

		_pull: docker.#Pull & {
			source: "node:19.0-alpine"
		}
		_copy: docker.#Copy & {
			input:    _pull.output
			contents: client.filesystem."./".read.contents
			dest:     "/app"
		}
		// deps: bash.#Run & {
		//  input:   _copy.output
		//  workdir: "/app"
		//  script: contents: #"""
		//   yarn install --frozen-lockfile
		//   """#
		// }
		deps2: yarn.#Script & {
			project: "deps"
			source:  client.filesystem."./".read.contents
			name:    "install --frozen-lockfile"
		}
		copy: docker.#Copy & {
			input:    _pull.output
			contents: deps2.output
			dest:     "/app"
		}
		// builder: docker.#Dockerfile & {
		//  source: client.filesystem.".".read.contents
		//  // Use the stage `FROM base as builder`
		//  target: "builder"
		// }
		// run: docker.#Dockerfile & {
		//  source: client.filesystem.".".read.contents
		//  // Use the stage `FROM base as run`
		//  target: "run"
		// }
		// build: docker.#Dockerfile & {
		//  source: client.filesystem.".".read.contents
		//  dockerfile: contents: #"""
		//   FROM node:19.0-alpine AS deps
		//   WORKDIR /app
		//   COPY package.json yarn.lock ./
		//   RUN yarn install --frozen-lockfile
		//   """#
		// }

		load: cli.#Load & {
			image: copy.output
			host:  client.network."unix:///var/run/docker.sock".connect
			tag:   "myimage"
		}
		// push: docker.#Push & {
		//  image: build.image
		//  dest:  client.env.REGISTRY_DOMAIN
		//  auth: {
		//   username: client.env.REGISTRY_USER
		//   secret:   client.env.REGISTRY_PASS
		//  }
		// }
	}
}
