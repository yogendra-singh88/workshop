var express = require('express');
var app = express();

var server = require('http').Server(app);

var bodyParser = require('body-parser');
var morgan = require('morgan');

var path = require('path');

var config = require('./config/config.json');

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client')));

// Configure the server port
var port = config.port;

//instantiate the server at the specified port
server.listen(port,() => {
        console.log("Server started at port :"+port);
});
