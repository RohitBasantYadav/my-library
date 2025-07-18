const BookModel = require("../../models/book.model");


const addbook = (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const { title, author, description, coverImage, availablity } = req.body;
        const book = new BookModel({ title, author, description, coverImage, availablity });
        book.save();
        return res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = addbook;