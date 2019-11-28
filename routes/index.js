const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Walter Cosmopolis says hi from his server!'));

router.get('/posts', controllers.getAllPosts);

router.get('/fans', controllers.getAllFans);

router.post('/post', controllers.createPost);

router.post('/email', controllers.createFan);


module.exports = router;

// routes/index.js