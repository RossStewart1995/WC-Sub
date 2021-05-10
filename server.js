'use strict';
const cors = require('cors');
const express = require('express');

const PORT = 3200;

var sub = require('./subtract');

const app = express();

app.use(cors());

app.get('/', (req,res) => {

    if(req.query.x == "" && req.query.y == ""){
        res.status(400).json({message: "Value of x and y have been declared as empty strings"})
    }
        if(req.query.x == ""){
            res.status(400).json({message: "Value of x has been declared as an empty string"})
        }
        if(req.query.y == ""){
            res.status(400).json({message: "Value of y has been declared as an empty string"})
        }

    if(req.query.x == null && req.query.y == null){
        res.status(400).json({message: "Value of x and y are null are null"})
    }
        if(req.query.x == null){
            res.status(400).json({message: "Value of x is null"})
        }
        if(req.query.y == null){
            res.status(400).json({message: "Value of y is null"})
        }

    if(isNaN(req.query.x) && isNaN(req.query.y)){
        res.status(400).json({message: "Value of x and y are invalid"})
    }
        if (isNaN(req.query.x)) {
            res.status(400).json({message: "Value of x is invalid"})
        }
        if (isNaN(req.query.y)) {
            res.status(400).json({message: "Value of y is invalid"})
        }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    var output = {
        'error': false,
        'string': '',
        'answer': 0,
        'x': req.query.x,
        'y': req.query.y
    };

    var x = req.query.x;
    var y = req.query.y;
    var answer = sub.subtract(x,y);

    output.string = x + '-' + y + '=' + answer;
    output.answer = answer;

    res.status(200).json(output);
});

//app.listen(PORT, HOST);
if(!module.parent){
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`),
    );
}

module.exports = app;
