const express = require('express');
const axios = require('axios');
const jsonParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const routes = require('./routes');

const app = express();

app.use(jsonParser());

app.use('/form', routes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})

//https://git.heroku.com/frozen-dawn-92571.git
