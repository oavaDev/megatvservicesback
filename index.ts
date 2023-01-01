require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import expressConfig from './express';

const app: Express = express();
const port = 8080;

app.listen(port, () => {
  expressConfig(app);
  console.log(`server listening on http://localhost:${port}`);
});

export default app;
