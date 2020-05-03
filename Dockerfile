FROM node:lts-alpine

WORKDIR /sandbox

ADD . /sandbox

RUN cd /sandbox
RUN yarn global add pm2

EXPOSE 80

CMD ["yarn", "start"]
