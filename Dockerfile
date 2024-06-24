# build environment
FROM node:current-alpine3.19 as build
RUN mkdir -p /home/node/app/ && chown node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
WORKDIR /home/node/app/client
RUN npm install
WORKDIR /home/node/app
EXPOSE 8000
EXPOSE 8899
# production environment
USER node
CMD ["npm", "start"]

