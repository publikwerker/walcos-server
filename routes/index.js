const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Walter Cosmopolis says hi from his server!'));

router.get('/posts', controllers.getAllPosts);

router.post('/post', controllers.createPost);


module.exports = router;

// routes/index.js