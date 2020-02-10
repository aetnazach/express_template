const router = require('express').Router();

const handleList = require('./handleList');
const handleGetOne = require('./handleGetOne');

router.get('/movies', handleList);
router.get('/movies/:id', handleGetOne);

module.exports = router;