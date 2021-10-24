const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send('Hello Jenkins Pipeline');
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
});