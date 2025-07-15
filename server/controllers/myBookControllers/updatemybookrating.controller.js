const MyBookModel = require("../../models/myBook.model");

const updatemybookrating = async (req, res) => {
    if (!req.body) { return res.status(400).json({ message: "Rating field is required" }) }
    const { rating } = req.body;
    const { bookId } = req.params;
    try {
        const mybook = await MyBookModel.findById(bookId);
        if (!mybook) {
            return res.status(400).json({ message: "Book not found" });
        }
        mybook.rating = rating;
        await mybook.save();
        return res.status(200).json({ message: "My book rating updated successfully" });
    } catch (error) {
        res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = updatemybookrating;