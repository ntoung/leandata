'use strict';

import express from 'express';
import webpack from './middleware/webpack';
import history from 'connect-history-api-fallback';

import { PORT } from './config/config.js';

const app = express();

app.use(history({verbose: true}));

//const api = require('./api/api');

// This provides help with console logging
//require('./middleware/loggers')(app);

// API Routing
//app.use('/api', api);
webpack(app);

app.listen(PORT);

console.info('Open up http://localhost:%s/ in your browser.', PORT);
