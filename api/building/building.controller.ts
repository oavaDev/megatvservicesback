import { Request, Response } from 'express';
import {
  createBuilding,
  showBuilding,
  showBuildings,
  deleteBuilding,
} from './building.service';

const createBuildingHandler = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const building = await createBuilding(data);
    return res
      .status(201)
      .json({ message: 'Building created succesfully', data: building });
  } catch (error: any) {
    return res.status(400).json({
      message: 'Building could not be created ',
      error: error.message,
    });
  }
};
const showBuildingsHandler = async (req: Request, res: Response) => {
  try {
    const buildings = await showBuildings();
    if (!buildings) {
      throw new Error('Buildings not found');
    }
    return res
      .status(201)
      .json({ message: 'Buildings found', data: buildings });
  } catch (error: any) {
    return res.status(400).json({
      message: 'Buildings could not be found',
      error: error.message,
    });
  }
};

const showBuildingHandler = async (req: Request, res: Response) => {
  const { buildingId } = req.params;
  try {
    const building = await showBuilding(buildingId);
    if (!building) {
      throw new Error('Building does not exist');
    }
    return res.status(201).json({ message: 'Building found', data: building });
  } catch (error: any) {
    return res.status(400).json({
      message: 'Building could not be found',
      error: error.message,
    });
  }
};

const deleteBuildingHandler = async (req: Request, res: Response) => {
  const { buildingId } = req.params;
  const building = await showBuilding(buildingId);
  if (!building) {
    return res.status(400).json({ error: 'Building is not valid' });
  }
  try {
    await deleteBuilding(buildingId);
    return res.status(201).json({ message: 'Product deleted succesfully' });
  } catch (error: any) {
    return res.status(400).json({
      message: 'Building could not be deleted',
      error: error.message,
    });
  }
};

export {
  createBuildingHandler,
  showBuildingHandler,
  showBuildingsHandler,
  deleteBuildingHandler,
};
