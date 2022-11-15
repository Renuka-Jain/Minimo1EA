import userController from '../controller/reportController';
import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

router.post('/', userController.register);
router.get('/:id', userController.getone);
router.get('/', userController.getall);
router.delete('/:id', userController.del);
router.put('/', userController.update);

export default router;