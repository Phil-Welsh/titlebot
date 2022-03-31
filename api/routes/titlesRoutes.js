// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.titles.index);

// exports
module.exports = router;
