'use strict';

import express from 'express';
import { PORT } from './config/config.js';
import webpack from './middleware/webpack';

const app = express();



//const api = require('./api/api');

// This provides help with console logging
//require('./middleware/loggers')(app);

// API Routing
//app.use('/api', api);
webpack(app);

app.listen(PORT);

console.info('Open up https://localhost:%s/ in your browser.', PORT);
