# blog-backend project

This project aims to start as a simple Blog backend for Markdown content.

## Quickstart

Just run

```
docker-compose up
```

Then create the `blog` database and the `posts` collection as explained below

## Configuring the project

When the backend starts it will connect to a `blog` database in a MongoDB instance and when any request is made to the `/posts` route, the server will query the database for documents in the `posts` collection

1. Run MongoDB (options):
    1. (preferred) Run it with the `docker-compose up` in the current folder - the entire project will start
    2. Run it any other way you with
2. Create a database named `blog`
3. Create a collection named `posts` in the `blog` database
4. Start the server or trigger a nodemon restart

## Running the project with NPM (or yarn)

There is a provided Dockerfile and docker-compose.yml file to run all the dependencies of the project all together and make it work with little configuration.

However, if you wish to run it directly on your user space, you can do so with `npm` or `yarn` run any of the commands below to install the projects dependencies

```
npm install
# or
yarn install
```

Then, just run

```
npm run dev
# or
yarn dev
```

## Useful links

https://hapi.dev/tutorials

https://www.mongodb.com/developer/how-to/hapijs-nodejs-driver/