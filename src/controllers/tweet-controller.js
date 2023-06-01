import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            data : response,
            err: {},
            message : "Successfully created tweet"
        })
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