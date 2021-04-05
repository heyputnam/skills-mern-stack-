// require modules

const express = require('express');
const morgan = require('morgan')


// inital express setup

const app = express()
require('dotenv').config()
require('./config/database')

// config setting with app.set()


//mount middleware with app.use()

app.use(morgan('dev'));
app.use(express.json());


// mount routes with app.use()

app.use('/api/skills', require('./routes/api/skills'))


//tell port listening on port 3001
//basically put it on something or run on port 3001(used for deployment purposes)
const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`ears on at port ${port}`)
});