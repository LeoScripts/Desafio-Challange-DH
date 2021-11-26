const express = require('express');
const path = require('path');
const IndexController = require('./controller/IndexController');

const router = express.Router()

router.get('/',IndexController.index);
router.post('/salvar',IndexController.salvar);

module.exports = router;