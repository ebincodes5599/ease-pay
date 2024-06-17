const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db/db');
const rootRouter = require('./routes');
const cors = require('cors');

// Set Port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
