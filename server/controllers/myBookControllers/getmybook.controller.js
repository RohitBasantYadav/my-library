const MyBookModel = require("../../models/myBook.model");

const getmybook = async(req,res) =>{
    const user_id = req.user_id;
    try {
        const mybook = await MyBookModel.find({userId:user_id});
        if(mybook){
            return res.status(200).json({message:"My book fetched successfully",mybookData:mybook});
        }else{
            return res.status(400).json({message:"My book not found"});
        }
    } catch (error) {
        res.status(500).json({message:`Internal Server error ${error}`});
    }

}


module.exports = getmybook;