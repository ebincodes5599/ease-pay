
const dotenv=require('dotenv');
const path =require('path');
const express =require('express');
const app = express();
const connectDB = require('./db/db');
const rootRouter = require('./routes');
const cors =require('cors')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/v1/',rootRouter);

//connect to db
connectDB();

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});


//listening to Server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})