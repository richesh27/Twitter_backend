import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {
    constructor (){
        super(Tweet)
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer");
            console.log(error)
            throw error;
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
            const tweet = await Tweet.findById(id).populate({path:'comments', populate:{path: 'comments'}}).lean();      
            return tweet;      
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});  // this populate func. should always be attached to a mongoose query based object not an promise based object
            return tweet;
        } 
        catch (error) {
            console.log("Something wrong in the repo tweet layer")
            console.log(error)
        }
    }

}
export default TweetRepository; 