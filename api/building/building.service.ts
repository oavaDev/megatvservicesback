import Building, { IBuilding } from './building.model';

const createBuilding = (data: IBuilding) => {
  return Building.create(data);
};

const showBuildings = () => {
  return Building.find();
};

const showBuilding = (id: string) => {
  return Building.findById(id);
};

const deleteBuilding = (id: string) => {
  return Building.findByIdAndDelete(id);
};

export { createBuilding, showBuildings, showBuilding, deleteBuilding };
