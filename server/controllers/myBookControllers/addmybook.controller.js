const MyBookModel = require("../../models/myBook.model");

const addmybook = async (req, res) => {
    const { status, rating } = req.body;
    try {
        const { bookId } = req.params;
        const user_id = req.user_id;
        if (!bookId || !user_id) {
            return res.status(400).json({ message: "Book not found or user not found" });
        }
        const existingMyBook = await MyBookModel.findOne({ userId: user_id, bookId: bookId });
        if (existingMyBook) {
            return res.status(400).json({ message: "Book already exists" });
        }
        const mybook = new MyBookModel({ userId: user_id, bookId: bookId, status, rating });
        mybook.save();
        return res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = addmybook;