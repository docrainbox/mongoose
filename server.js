//
// 1) mongod --dbpath ./data
// 2) node server.js
// 3) localhost:8080 and enter some to-do actions
// 
var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	morgan = require('morgan'),
	//
	// body-parser contains parser, json and urlencoded
	//
	bdyprsr = require('body-parser'),
	mongoose = require('mongoose');

require('./models/todo')

var	todoController = require('./controllers/todo');


mongoose.connect('mongodb://localhost/mongooseDemo')

app.use(bdyprsr.json());
app.use(bdyprsr.urlencoded());
//Enable logging and then EJS view engine
app.use((morgan('combined')));
app.set('view engine','ejs');

app.get('/',todoController.index);
app.post('/',todoController.create);
app.put('/:todoId',todoController.update);
app.del('/:todoId',todoController.delete);

app.listen(port,function(err) {
	console.log('listening on %s',port);
});