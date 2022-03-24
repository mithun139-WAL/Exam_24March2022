const express = require('express');
const router = express.Router();
var usernameController = require('../controllers/username');
router.get('/', usernameController.getUsername);
router.post('/', usernameController.createUsername);
router.delete('/:_id', usernameController.deleteUsername);

module.exports = router;
