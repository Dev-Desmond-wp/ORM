const { Post, User} = require('../models');

const createPost = async (req, res) => {
    try {
        const { title, content, caption, userId } = req.body;
      const post = await Post.create({
        title,
        content,
        caption,
        userId
      })
  
      res.status(201).json({
        message: 'Post created successfully',
        data: post
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                as: 'user'
            }
        });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOnePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id, {
            include: {
                model: User,
                as: 'user'
            }
        });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { caption, title } = req.body;

        const updatepost = await Post.update(
            { caption, title, content },
            { where: { id } }
        );

        res.status(200).json({
            message: "Post updated successfully",
            data: updatepost
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
      const post = await Post.findByPk(id);
  
      if (!post) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }
  
      await post.destroy();
  
      res.status(200).json({
        message: 'Post deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost
}