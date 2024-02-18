const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ex-events'

mongoose.connect(MONGO_URI)
    .then(() => console.log(`Connected to Mongo! Database: "${MONGO_URI}"`))
    .catch((error) => console.error("Error connecting to mongo: ", error));

