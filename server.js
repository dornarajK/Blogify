// !My Blog Website

const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');
const cors = require('cors');

// port
dotenv.config({path:'config.env'});
const app= express();
const PORT = process.env.PORT || 8080;

// Middleware setup
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};


app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Pre-flight request handler

// Log requests
// app.use(morgan('tiny'));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
connectDB();

// get ejs file
app.set('view engine', 'ejs');
// Load assets


//allw to use css styiling
app.use('/css', express.static(path.join(__dirname, 'assets/css')));


// allw to use img and js assets
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));


// get raute 
app.use('/', require('./server/routes/rauter')) 


// server start
app.listen(PORT, () => { 
  console.log(`Server is running at http://localhost:${PORT}`);
});

