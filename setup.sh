#!/bin/bash

. ./.env

network=''

if [ ! -z ${NETWORKS_DEFAULT_EXTERNAL_NAME} ]
then
network="$(
cat <<EOF


networks:
  default:
    external:
      name: ${NETWORKS_DEFAULT_EXTERNAL_NAME}
EOF
)"
fi

container_name='nodesandbox'

if [ ! -z ${CONTAINER_NAME} ]
then
container_name=${CONTAINER_NAME}
fi

cat > docker-compose.yml <<EOF
version: '3.3'

services:
  nodesandbox:
    image: node:lts-alpine
    restart: unless-stopped
    expose: [80]
    container_name: ${container_name}
    working_dir: /sandbox
    volumes:
      - .:/sandbox
    environment:
      VIRTUAL_HOST: ${VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${VIRTUAL_HOST}
    command: /bin/sh -c "yarn global add pm2 && yarn && pm2-runtime start pm2.config.js"${network}
EOF

cp -n apps.js.sample apps.js
cp -n proxy.js.sample proxy.js
