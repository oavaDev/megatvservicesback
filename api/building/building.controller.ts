import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
import {
  createBuilding,
  showBuilding,
  showBuildings,
  deleteBuilding,
} from './building.service';
import Building from './building.model';

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
