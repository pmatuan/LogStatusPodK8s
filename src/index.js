const express = require('express');
require('dotenv').config();
require('./models');
const { PORT } = require('./configs');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

require('./routes')(app);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
