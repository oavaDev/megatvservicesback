require('dotenv').config();
import express, { Express, Request, Response } from 'express';

const server: Express = express();
const port = 8080;
server.get('/', (req: Request, res: Response) => {
  res.send('Server testing');
});

server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
