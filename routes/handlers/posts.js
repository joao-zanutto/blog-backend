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

exports.getAllPosts = async (request) => {
    try {
        const offset = Number(request.query.offset) || 0;
        const result = await request.mongo.db.collection('posts').find({}).sort({metacritic:-1}).skip(offset).limit(20).toArray();
        return result
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}

exports.createPost = async (request) => {
    const db = request.mongo.db;
    const payload = request.payload
    console.log(payload)

    try {
        const result = await db.collection('posts').insertOne(payload);
        return result
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}