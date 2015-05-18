/**
 * Created by nad on 16/05/15.
 */

const express = require('express');
var app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = mongoose.connect('mongodb://localhost/RMA');
var Product = require('./stock/models/model.product');


productRouter = require('./stock/routes/route.product')(Product);
app.use('/api/products', productRouter);


app.listen(port, function(){
    console.log('Server running on  '+ port)

})
