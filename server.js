const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
// Load environment variables
dotenv.config({ path: './config/config.env' });

// Routes
const routes = require('./routes/bootcamps');
const app = express();
app.use(logger);
app.use('/api/v1/bootcamps', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server running'));

