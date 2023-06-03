import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-S3-config.js";

const singleUploader = upload.single('image');  //it acts as an middleware ( the upload's function which is single acts as MW)

const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        singleUploader(req,res,async function(err,data){    //its a middleware hence can modify our req obj hence the multer-uploader modifies our req by itself and attaches the file object to req object
            if(err){
                return res.status(500).json({error:err})
            }
            console.log("Image url is ", req.file);
            const doc  = {...req.body} ;
            doc.image = req.file.location;
            const response = await tweetService.create(doc);
            return res.status(201).json({
                success : true,
                data : response,
                err: {},
                message : "Successfully created tweet"
            });
        });
       
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            data : {},
            err: error,
            message : "error in creating tweet"
        })
    }
}

export const getTweet =  async(req,res) =>{
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success : true,
            data : response,
            err: {},
            message : "Successfully fetched tweet"
        })
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            data : {},
            err: error,
            message : "error in fetching tweet"
        })
    }
}