FROM registry.access.redhat.com/ubi8/nodejs-12 as base

FROM base

# Create app directory
WORKDIR /opt/app-root/src

COPY package*.json ./

RUN npm ci

COPY --chown=1001:0 src src
RUN chmod -R g=u src

EXPOSE 8081

ARG ENV=production
ENV NODE_ENV $ENV
ENV NODE_VERSION $NODEJS_VERSION
CMD npm run $NODE_ENV