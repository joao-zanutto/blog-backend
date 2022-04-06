const Boom = require('boom');

exports.getPostById = async (request) => {
    const db = request.mongo.db;
            const ObjectID = request.mongo.ObjectID;

            try {
                const result = await db.collection('posts').findOne({  _id: new ObjectID(request.params.id) });
                return result
            }
            catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
}

