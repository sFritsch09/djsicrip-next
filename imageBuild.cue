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
			REGISTRY_DOMAIN: string
			REGISTRY_USER:   string | "_token_"
			REGISTRY_PASS:   dagger.#Secret
		}
		filesystem: {
			".": read: {
				contents: dagger.#FS
				exclude: [".next", "node_modules", "cue.mod", "README.md"]
			}
		}
	}
	actions: {
		// Next Build
		deps: docker.#Dockerfile & {
			source: client.filesystem.".".read.contents
			// dockerfile: path: "Dockerfile.production"
			// Use the stage `FROM base as deps`
			target: "deps"
		}
		builder: docker.#Dockerfile & {
			source: client.filesystem.".".read.contents
			// Use the stage `FROM base as builder`
			target: "builder"
		}
		run: docker.#Dockerfile & {
			source: client.filesystem.".".read.contents
			// Use the stage `FROM base as run`
			target: "run"
		}
		build: docker.#Dockerfile & {
			source: client.filesystem.".".read.contents
			dockerfile: contents: #"""
				FROM node:19.0-alpine AS deps
				WORKDIR /app
				COPY package.json yarn.lock ./
				RUN yarn install --frozen-lockfile
				"""#
		}

		load: cli.#Load & {
			image: run.output
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
