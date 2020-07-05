const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv/config');

// cors Middleware
app.use(cors())
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Users API Routes
app.use('/user', require('./routes/api/auth'));

// // Console API Routes
app.use('/console', require('./routes/api/console'));

// Controller API Routes
app.use('/controller', require('./routes/api/controller'));

// // Tv API Routes
app.use('/tv', require('./routes/api/tv'));

// // Games API Routes
app.use('/games', require('./routes/api/games'));


// Connect to DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));