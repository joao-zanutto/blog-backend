'use strict';

const Hapi = require('@hapi/hapi');
const Boom = require('boom');

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
        handler: async (request) => {
            const db = request.mongo.db;
            const ObjectID = request.mongo.ObjectID;

            try {
                const result = await db.collection('posts').findOne({  _id: new ObjectID(request.params.id) });
                console.log(result)
                return result
            }
            catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();