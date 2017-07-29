'use strict';

const bodyParser = require('body-parser');
const morgan = require('morgan');

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
};
