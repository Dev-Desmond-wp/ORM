const express = require('express');

const { createPost, getAllPosts, getOnePost, updatePost, deletePost } = require('../controller/postController.js');

const router = express.Router();

router.post('/createpost', createPost);

router.get('/getallposts', getAllPosts);

router.get('/getonepost/:id', getOnePost);

router.put('/updatepost/:id', updatePost);

router.delete('/deletepost/:id', deletePost);

module.exports = router