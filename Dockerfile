FROM node:16
COPY package.json /app/package.json
WORKDIR /app
RUN yarn install
ENTRYPOINT [ "yarn", "dev" ]
