const BookModel = require("../../models/book.model");

const getbook = async (_, res) => {
    try {
        const book = await BookModel.find();
        res.status(200).json({ message: "Book fetched successfully", bookData: book });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });  
    }
}

module.exports = getbook;