const app = require('express')();
require('colors');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');

app.use(cors());

// MongoDB Connection
connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
