import Building from './api/building/building.route';
import { Express } from 'express';
const routes = (app: Express) => {
  app.use(Building);
};

export default routes;
