const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


// //connect to db
db.connect();

//apply middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
// app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.use(express.static(path.join(__dirname,'public')));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}'`),
);
