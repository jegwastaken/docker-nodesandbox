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
    build: .
    restart: unless-stopped
    container_name: ${container_name}
    volumes:
      - .:/sandbox
    environment:
      VIRTUAL_HOST: ${VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${VIRTUAL_HOST}
    command: /bin/sh -c "pm2-runtime pm2.config.js"${network}
EOF
