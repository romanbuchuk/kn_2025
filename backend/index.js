const express = require('express');
const app = express();
const path = require('path');

const distFolder = path.resolve(__dirname + '/../frontend/dist/');

app.use(express.static(distFolder));

app.use((req, res, next) => {
    console.log('Express Server');

    next();
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(distFolder + 'index.html'));
});

// app.post('/users', (req, res) => {
//     res.status(500).send('Hello World!');
// });

app.listen(8085, () => {
    console.log('Listening on 8085');
});