# Tracked

* [Project](https://github.com/mikaturunen/tracked/projects/1)
* [Wiki](https://github.com/mikaturunen/tracked/wiki)

## Running local development environment

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
$ tsc --watch           # As changes happen, this terminal will compile them into javascript and
                        # they will be instantly available for use inside the docker containers and
                        # you can look at your changes in localhost:8080
```

Basic gist of it is to run the docker-compose in a manner where 99.9% of the repository is mounted into the containers and they just act as isolated running / compilation pods for your application and you don't have to pollute your local environment with that, yet still using the tools you prefer from your local host environment for development work. We do not use docker for deployments at all at this point, it's completely done on top of Heroku dynamos.

## Additinal development information

* Heavily relies on [this](https://github.com/piotrwitek/react-redux-typescript-guide) for frontend compatibility and development guideline
  * TODO: write a better guideline that's strictly used for this project, essentially outgrow the above site.
* Shared types from backend to frontend, this is done as type interfaces in TypeScript.
* Aim to use minimal amount of classes, mainly to store component information or state if necessary. Otherwise drive towards a more functional design.
*
