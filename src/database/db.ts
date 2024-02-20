import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise'; // Import mysql module

// Create a connection to the database

export const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
});
