const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello Jenkins');
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
});