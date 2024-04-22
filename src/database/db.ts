import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise'; // Import mysql module

// Create a connection to the database

export const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
