import { Express } from 'express';
import express from 'express';
import cors from 'cors';
const cOptions = {
  origin: '*',
};

const expressConfig = (app: Express) => {
  app.use(express.json());
  app.use(cors(cOptions));
};

export default expressConfig;
