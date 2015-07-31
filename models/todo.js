var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Now define the schema
// Some todo and then a date to accompany
var TodoSchema = new Schema({
	name:String,
	createAt:{type:Date,default:Date.now}
});

//Here we are registering the model
mongoose.model('todo',TodoSchema);

	