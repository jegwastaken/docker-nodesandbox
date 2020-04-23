FROM node:lts-alpine

WORKDIR /sandbox

ADD . /sandbox

RUN cd /sandbox
RUN yarn
RUN yarn global add pm2

EXPOSE 80

CMD ["pm2-runtime", "pm2.config.js"]
