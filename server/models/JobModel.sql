CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    applied BOOLEAN NOT NULL,
    phone_screen BOOLEAN NOT NULL,
    interview INT NOT NULL DEFAULT 0,
    application_deadline DATE,
    application_date DATE NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    communications TEXT,
    resume TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);