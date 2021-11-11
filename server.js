const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
//const { application } = require('express');
const bodyparser = require("body-parser");
const path = require('path');
const connectdb = require('./server/database/connection');

dotenv.config({path: `./config.env`}); // seperate the port number from the main source code

const PORT = process.env.PORT || 3000; //listen on the port number otherwise listen on default 3000 port

//log requests
app.use(morgan(`tiny`));

//mongo connection
connectdb();


//parse request to body parse
app.use(bodyparser.urlencoded({extended: true}));

//set view engine   
app.set("view engine", "ejs");
//app.engine('ejs', require('ejs'));
//app.set("views", path.resolve(__dirname, "views/ejs"));

//loaad assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

