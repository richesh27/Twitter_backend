const Tweet = require('../models/tweet')

class TweetRepository {

    async create(data){
        try {
            const tweet = await Tweet.create(data);      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer");
            console.log(error)
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

    async getAll(offset, limit){        // get all tweets based on offset and limit ....helpful in pagination features
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

    async update(TweetId, data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(TweetId, data, {new:true});      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

    async destroy(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }
}

module.exports = TweetRepository;