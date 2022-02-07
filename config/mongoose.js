
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/st2');

const db = mongoose.connection;

db.on('error', console.error.bind(console, `There was some error in connection to databse`));

db.once('open', () => {
    console.log(`Connection was successful to database`);
})