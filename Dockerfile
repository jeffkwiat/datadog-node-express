FROM node:alpine

RUN apk add --no-cache tini

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY node/package.json /usr/src/app/
RUN yarn --pure-lockfile && yarn cache clean

COPY node/ /usr/src/app/

EXPOSE 3000
USER node

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "." ]