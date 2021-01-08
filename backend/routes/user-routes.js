import express from 'express';
import userController from '../controllers/user-controller.js';
import { isAuth } from '../utils.js';

var router = express.Router();

router.post('/signin', userController.signIn);
router.post('/register', userController.createUser);
router.get('/readuser:id', userController.readUser);
router.put('/updateuser:id', isAuth, userController.updateUser);
router.delete('/deleteuser:id', userController.deleteuser);

// router.post('/createuser', userController.createUser);
// router.post('/confirmlogin', userController.updateUser);
// router.get('/getuserbytoken', userController.updateUser);

export default router;