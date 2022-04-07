FROM node:16
COPY . /app
WORKDIR /app
RUN yarn install
ENTRYPOINT [ "yarn", "start" ]
