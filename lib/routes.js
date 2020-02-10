const router = require('express').Router();

const handleList = require('./handleList');
const handleGetOne = require('./handleGetOne');

router.get('/movie', handleList);
router.get('/movie/:id', handleGetOne);

module.exports = router;