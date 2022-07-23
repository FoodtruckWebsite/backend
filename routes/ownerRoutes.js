const router = require('express').Router();
const ownerCtrl = require('../controllers/ownerCtrls');

router.get('/', ownerCtrl.index)
router.post('/', ownerCtrl.createOwner)
router.delete('/:ownerId', ownerCtrl.deleteOwner)


module.exports = router