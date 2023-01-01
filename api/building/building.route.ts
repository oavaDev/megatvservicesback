import { Router } from 'express';
import {
  createBuildingHandler,
  showBuildingHandler,
  showBuildingsHandler,
  deleteBuildingHandler,
} from './building.controller';

const router = Router();
router.post('/create', createBuildingHandler);
router.get('/show', showBuildingsHandler);
router.get('/show:buildingId', showBuildingHandler);
router.delete('/delete', deleteBuildingHandler);

export default router;
