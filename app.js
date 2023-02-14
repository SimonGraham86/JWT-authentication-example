const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const resultsRoutes = require('./routes/results');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Need to refine second argument to include only the front end address
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/results', resultsRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})