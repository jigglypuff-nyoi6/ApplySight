import { User, JobApplication } from './module';

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE job_applications (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    jobTitle VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    applicationDate DATE NOT NULL,
    communications JSONB,                   -- JSON array for tracking communications
    questionsAsked JSONB,                  -- JSON array for tracking questions asked
    resumeLinkOrPath VARCHAR(512),         -- Can be increased depending on expected path length
    notes TEXT                             -- Text field for additional notes
);

