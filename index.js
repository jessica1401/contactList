const express = require('express');
const path = require('path');
const portNumber = 3000;
const db = require('./config/mongoose');
const app = express();
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}))
app.use(express.static('assests'));
app.use('/', require('./routes/index'));


app.listen(portNumber, (err) => {
    if(err) {
        console.log(`There was error in starting the server.`);
        return;
    }
    console.log(`Server started at port number ${portNumber}.`);
})