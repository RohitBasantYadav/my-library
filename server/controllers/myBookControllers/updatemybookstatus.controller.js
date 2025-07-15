const MyBookModel = require("../../models/myBook.model");

const updatemybookstatus = async (req, res) => {
    if (!req.body) { return res.status(400).json({ message: "Status field is required" }) }
    const { bookId } = req.params;
    const { status } = req.body;

    try {
        const mybook = await MyBookModel.findById(bookId);
        if (!mybook) {
            return res.status(400).json({ message: "Book not found" });
        }
        mybook.status = status;
        await mybook.save();
        return res.status(200).json({ message: "My book status updated successfully" });
    } catch (error) {
        res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = updatemybookstatus;