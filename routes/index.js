const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Walter Cosmopolis says hi from his server!'));

router.post('/email', (req, res) => res.send('You posted some shit!'));

module.exports = router;

// routes/index.js