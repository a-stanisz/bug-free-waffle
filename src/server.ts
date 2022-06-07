import dotenv from 'dotenv';
import express from 'express';
import { Express, Request, Response } from 'express';

dotenv.config();

const APP: Express = express();
const PORT = process.env.BACKEND_PORT || 5000;

APP.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});

APP.listen(PORT, () => {
  console.log(`Backend server is running at PORT ${PORT}`);
});
