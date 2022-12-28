const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/khoi_education_dev';

async function connect() {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully');
    } catch (err) {
        console.log('Connect failure!');
    }
}

module.exports = { connect };
