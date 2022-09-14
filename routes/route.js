const express = require('express')
const router = express.Router()

const EmployeeControler = require('../controllers/userController');
const RegisterControler = require('../controllers/RegistrationControllers')

router.get('/', EmployeeControler.index)
router.get('/show/:id', EmployeeControler.show)
router.post('/store', EmployeeControler.store)
router.post('/update/:id', EmployeeControler.update)
router.delete('/delete', EmployeeControler.destroy)

router.post('/register',RegisterControler.Register)
module.exports = router