const { Pool } = require('pg');

// Database connection configuration

const connectionString =
  'postgres://cylvgyzc:wZc1Mz6n4YVQuLENPqHDulmDUGbrujCX@berry.db.elephantsql.com:5432/cylvgyzc';

const pool = new Pool({
  connectionString: connectionString,
});

// Then use the pool to query your database...

module.exports = {
  pool,
};

// LINES BELOW ARE TEMPORARY AND USED FOR TABLE CREATION

// // Create Users Table
// const createUserTable = async () => {
//   try {
//     const query = `
//             CREATE TABLE users (
//                 user_id SERIAL PRIMARY KEY,
//                 username VARCHAR(255) NOT NULL UNIQUE,
//                 email VARCHAR(255) NOT NULL UNIQUE,
//                 password VARCHAR(255) NOT NULL  -- Remember to hash in real apps!
//             );
//         `;
//     await pool.query(query);
//     console.log('Users table created successfully.');
//   } catch (error) {
//     console.error('Error creating users table:', error);
//   }
// };

// // Create Jobs Table
// const createJobsTable = async () => {
//   try {
//     const query = `
//             CREATE TABLE jobs (
//                 job_id SERIAL PRIMARY KEY,
//                 applied BOOLEAN NOT NULL,
//                 phone_screen BOOLEAN NOT NULL,
//                 interview INT NOT NULL DEFAULT 0,
//                 application_deadline DATE,
//                 application_date DATE NOT NULL,
//                 company_name VARCHAR(255) NOT NULL,
//                 job_title VARCHAR(255) NOT NULL,
//                 communications TEXT,
//                 resume TEXT,
//                 user_id INT,
//                 FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
//             );
//         `;
//     await pool.query(query);
//     console.log('Jobs table created successfully.');
//   } catch (error) {
//     console.error('Error creating jobs table:', error);
//   }
// };

// // Execute table creation
// const setupDatabase = async () => {
//   await createUserTable();
//   await createJobsTable();
// };

// // Run the database setup
// setupDatabase().then(() => {
//   pool.end(); // Close the connection after setup is done
// });
