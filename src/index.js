const express = require('express');
require('dotenv').config();
require('./models');
const { PORT } = require('./configs');

const app = express();

require('./routes')(app);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
