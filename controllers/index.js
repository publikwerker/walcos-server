const Splash = require('../components/splash.js');

const models = require('../database/models');

const getSplash = (req, res) => {
 return res.send(Splash);
}

const createFan = async (req, res) => {
  try {
    const fan = await models.Fan.create(req.body);
    return res.status(201).json({
      fan,
      message: 'you have been added to our fan base!'
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  };
};


const createPost = async (req, res) => {
  try {
    const post = await models.Post.create(req.body);
    return res.status(201).json({
      post,
      message: 'your post has been added'
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  };
};

const getAllFans = async (req, res) => {
  try {
    const fans = await models.Fan.findAll();
    return res.status(200).json({ fans });
  } catch (error) {
    return res.status(500).send(error.message);
  };
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await models.Post.findAll({
      include: [
        {
          model: models.Comment,
          as: 'comments'
        },
        {
          model: models.User,
          as: 'author'
        }
      ]
    });
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  };
};


module.exports = {
  createFan,
  createPost,
  getAllFans,
  getAllPosts,
  getSplash,
}

// controllers/index.js