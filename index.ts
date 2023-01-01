require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import expressConfig from './express';

const app: Express = express();

app.listen(process.env.APP_PORT || 8080, () => {
  expressConfig(app);
  console.log(
    `server listening on http://localhost:${process.env.APP_PORT || 8080}`
  );
});

export default app;
