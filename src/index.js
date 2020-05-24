const express   =   require('express');
const app       =   express();
const routes    =   require('./routes');
const db        =   require('./db/db');
const errorHandler  =   require('./middlewares/errors');

require('dotenv').config({path: `${__dirname}/../.env`});

app.use(express.json());
app.use(routes);

//error handler
app.use(errorHandler);
const port      =   process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

module.exports = app;