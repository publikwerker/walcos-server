const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => res.send('Walter Cosmopolis says hi from his server!'));

app.post('/email', (req, res) => res.send('You posted some shit!'));

app.listen(port, () => console.log(`app listening on port ${port}!`));