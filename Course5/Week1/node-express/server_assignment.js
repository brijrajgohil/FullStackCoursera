var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishRouter.dishRouter);
app.use('/promotions', promoRouter.promoRouter);
app.use('/leadership', leaderRouter.leaderRouter);


app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
