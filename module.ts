declare module 'pg';

export interface User {
  id: number; // Typically an auto-incremented primary key
  username: string; // Unique username
  email: string; // Unique email address
  password: string; // Password (hashed and salted before being stored in the database)
  firstName?: string; // First name of the user (optional)
  lastName?: string; // Last name of the user (optional)
  createdAt: Date; // Timestamp of user creation
  updatedAt: Date; // Timestamp of last update
}
export interface JobApplication {
  id: number; // A unique identifier for each application
  company: string; // The company the user is applying to
  jobTitle: string; // Job position or title
  location: string; // Location of the job (e.g., "New York, NY")
  applicationDate: Date; // The date when the user applied for the job
  communications: string[]; // An array of communications related to the application
  questionsAsked: string[]; // An array of questions asked during interviews or communications
  resumeLinkOrPath: string; // A link or path to the uploaded resume
  notes: string; // Additional notes related to the job application
}
