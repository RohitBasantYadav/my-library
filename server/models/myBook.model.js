const mongoose = require("mongoose");


const myBookSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    status: { type: String, enum: ['Want to Read', 'Reading', 'Completed'], default: 'Want to Read' },
    rating: { type: Number, min: [1, 'Rating must be at least 1'], max: [5, 'Rating cannot be more than 5'] }
});

const MyBookModel = mongoose.model('MyBook', myBookSchema);

module.exports = MyBookModel;