const mongoose      =   require('mongoose');
const {Schema}      =   mongoose;
mongoose.Promise    =   global.Promise;

const wordSchema    =   new Schema ({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true
	}
}, {timestamp: true});

module.exports = mongoose.model('Word', wordSchema);