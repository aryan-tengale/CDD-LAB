const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 5000;

const dbConfig = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_NAME || 'labdb'
};

app.get('/', async (_req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT 1 AS database_connected');
    res.json({ message: 'Web application connected to MySQL successfully.', result: rows[0] });
  } catch (error) {
    console.error('Database connection failed:', error.message);
    res.status(503).json({ message: 'Database is not ready yet. Try again shortly.' });
  } finally {
    if (connection) await connection.end();
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Web service listening on port ${PORT}`));
