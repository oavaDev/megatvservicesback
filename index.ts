require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import expressConfig from './express';
import { connect } from './database';
import routes from './routes.config';
const app: Express = express();

app.listen(process.env.APP_PORT || 8080, () => {
  expressConfig(app);
  connect();
  routes(app);
  console.log(
    `server listening on http://localhost:${process.env.APP_PORT || 8080}`
  );
});

export default app;
