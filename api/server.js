// imports
require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/v1/titles', routes.titles);

// Database connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
