import mysql from 'mysql2/promise';

// Load environment variables
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

// Create a connection to the database
const connection = mysql.createPool({
    host,
    user,
    password,
    database
});

export default connection;


