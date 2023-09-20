import express, { Request, Response } from 'express';
import { Pool } from 'pg';

import * as authController from './controllers/authController';

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.post('/register', authController.register);
app.post('/login', authController.login);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
