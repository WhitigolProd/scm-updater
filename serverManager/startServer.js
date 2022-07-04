const path = require(`path`)
const express = require('express')
let manager = require(`./appStorage.json`)
const config = require(`./config.json`)

//? Update Manager Variables
setInterval(() => {
    manager = require(`./appStorage.json`);
}, 1000)

const app = express()
const serverConfig = config.express;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`)
app.use(express.static(path.join(__dirname, `../storage`)))

app.get('/', (req, res) => {
    res.render('index', { exp: manager })
})

module.exports = function () {
    app.listen(serverConfig.port, '0.0.0.0', function () {
    })
}

module.exports();