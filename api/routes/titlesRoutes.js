// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.titles.index);
router.post('/', ctrl.titles.create);

// exports
module.exports = router;
