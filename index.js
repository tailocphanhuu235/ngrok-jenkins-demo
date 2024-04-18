const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send('Hello Jenkins Pipeline New2');
});

app.get('/users', (req, res) => {
    res.send('List Users Jenkins Pipeline');
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
});
