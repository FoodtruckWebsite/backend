const router = require('express').Router();
const userCtrl = require('../controllers/userCtrls');

router.post('/', userCtrl.createUser)
router.delete('/:userId', userCtrl.deleteUser)

module.exports = router