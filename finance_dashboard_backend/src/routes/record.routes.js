import express from 'express';
import recordController from '../controllers/record.controller.js';

const router = express.Router();
router.post('/', recordController.createRecord);
router.get('/', recordController.getRecords);
router.get('/:id', recordController.getRecordById);
router.put('/:id', recordController.updateRecord);
router.delete('/:id', recordController.deleteRecord);
export default router;