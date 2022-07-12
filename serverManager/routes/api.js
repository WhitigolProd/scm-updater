const express = require(`express`);
const { appStorage, app } = require('../exports');
const router = express.Router();
require(`../exports`); // Require Exported Variables
const path = require(`path`);

router.get('/', (req, res) => {
    res.render('denied');
});

router.post('/start', (req, res) => {
    console.log(`${appStorage.config.cadDir}`);
});

module.exports = router;
