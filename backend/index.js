const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./db/db');
const rootRouter = require('./routes');
// Example in index.js
const util = require('node:util');
const path = require('node:path');
const fs = require('node:fs');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS

app.use(cors({origin:true}))

// Routes
app.use('/api/v1/', rootRouter);

// Connect to DB
connectDB();

// Serve Static Files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-All Route for Client-Side Routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
