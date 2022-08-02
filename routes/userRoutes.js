const router = require('express').Router();
const userCtrl = require('../controllers/userCtrls');

router.post('/register', userCtrl.createUser)
router.delete('/:userId', userCtrl.deleteUser)

module.exports = router