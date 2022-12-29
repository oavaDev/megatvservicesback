require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
const app: Express = express();
const port = 8080;

app.use(cors);
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Server testing');
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
