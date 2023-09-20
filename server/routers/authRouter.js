import { Pool } from 'pg';
import * as authController from './controllers/authController';
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});
app.post('/register', authController.register);
app.post('/login', authController.login);












