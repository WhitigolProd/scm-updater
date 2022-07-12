const path = require(`path`);
const express = require('express');
const { config, appStorage } = require('./exports');
require('./exports');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(path.join(__dirname, `../styles/`)));
app.use(express.static(path.join(__dirname, '../img/')));

app.get('/', (req, res) => {
    res.render('index', { exp: appStorage });
});

module.exports = function () {
    app.listen(config.express.port, '0.0.0.0', function () {
        console.log(`Server Running on Port ${config.express.port}`);
    });
};

//! Routers
const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

module.exports();
