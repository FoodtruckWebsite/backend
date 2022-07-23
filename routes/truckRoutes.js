const router = require('express').Router();
const truckCtrl = require('../controllers/truckCtrls');

router.get('/', truckCtrl.showAllTrucks)
router.get('/:truckId', truckCtrl.truckDetails)
router.post('/', truckCtrl.createTruck)
router.put('/edit/:truckId', truckCtrl.updateTruck)
router.delete('/:truckId', truckCtrl.deleteTruck)


module.exports = router