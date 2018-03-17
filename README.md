# Tracked

* [Project](https://github.com/mikaturunen/tracked/projects/1)
* [Wiki](https://github.com/mikaturunen/tracked/wiki)

## Running local development environment

* `source/backend/` contains all backend node.js source code.
* `source/frontend/` contains all the react-reduct frontend code.

They both have their own build porcess but are compiled under `release/` into a single application. React-redux front is compiled into `release/public` directory to act as the static asset location for front and the `release/*` otherwise is the node.js application.

### Requirements

* Docker
* Docker-compose
* Basic understanding of the tools

### Commands to run

```bash
# Navigate into the repository directory.
# Terminal 1:
$ docker-compose up     # This will start the applications services and mount the local environment inside it
# Terminal 2:
$ cd source/backend
$ tsc --watch           # As changes happen, terminal will compile backend changes into the container.
# Terminal 3:
$ cd source/frontend
$ tsc --watch           # Same as above but for frontend

# Open localhost:8080 to see the application and the changes in real-time
```

Basic gist of it is to run the docker-compose in a manner where 99.9% of the repository is mounted into the containers and they just act as isolated running / compilation pods for your application and you don't have to pollute your local environment with that, yet still using the tools you prefer from your local host environment for development work. We do not use docker for deployments at all at this point, it's completely done on top of Heroku dynamos.

We could get rid of terminal 2 use completely in the above dev environment example if we used `concurrently` or some other tool in the build/dev container. For now it's like this. Feel free to contribute. I'm lazy.

## Additinal development information

* Heavily relies on [this](https://github.com/piotrwitek/react-redux-typescript-guide) for frontend compatibility and development guideline
  * TODO: write a better guideline that's strictly used for this project, essentially outgrow the above site.
* Shared types from backend to frontend, this is done as type interfaces in TypeScript.
* Aim to use minimal amount of classes, mainly to store component information or state if necessary. Otherwise drive towards a more functional design.
*
