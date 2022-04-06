const posts = require("./handlers/posts")

exports.getPostById = {
    method: 'GET',
    path: '/posts/{id}',
    handler: posts.getPostById
};

exports.getAllPosts = {
    method: 'GET',
    path: '/posts',
    handler: posts.getAllPosts
};

exports.createPost = {
    method: 'POST',
    path: '/posts',
    handler: posts.createPost
};