require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');

const createError = require('http-errors');

require('./configs/db.config');
require('./configs/hbs.config');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.urlencoded());


const router = require('./configs/routes.config');
app.use('/', router);

app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError && error.message.includes("_id")) {
        error = createError(404, 'Resource not found');
    } else if (!error.status) {
        error = createError(500, error);
    }
    console.error(error);
    res.status(error.status).render(`errors/${error.status}`);
});

const port = 3000;
app.listen(port, () => console.info( ` listen ${port}!! `));
