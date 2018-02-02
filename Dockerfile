FROM node:8.9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g yarn

# On some platforms, the .dockerignore file is being ignored in some versions of docker-compose
# See https://github.com/docker/compose/issues/1607.
RUN rm -rf node_modules

RUN yarn
