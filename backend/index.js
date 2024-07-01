const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./db/db');
const rootRouter = require('./routes');




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS

app.use(cors({origin:true}))

// Routes
app.use('/api/v1/', rootRouter);

// Connect to DB
connectDB();


// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
