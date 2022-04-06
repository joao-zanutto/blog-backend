'use strict';

const Hapi = require('@hapi/hapi');

const posts = require('./routes/posts')

const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
});

const dbOpts = {
    url: 'mongodb://admin:root@mongo:27017/blog?authSource=admin',
    decorate: true
};

const init = async () => {

    await server.register({
        plugin: require('hapi-mongodb'),
        options: dbOpts
    })

    server.route({
        method: 'GET',
        path: '/{id}',
        handler: posts.getPostById
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();