import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
        max : [250, 'Tweet cannot have more than 250 characters']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag'
        }
    ]
}, {timestamps: true});

//virtuals in mongoDB
// tweetSchema.virtual('contentWithEmail').get( function process () {
//     return `${this.content} \nCreated by: ${this.userEmail}`
// })

// tweetSchema.pre('save', function (next) {
//     console.log("inside a hook (middleware ")       // Generally they are called triggers which are used to trigger an event 
//     next(); //pointing to next middleware          // or after an event like before creation of a query and after creation of query
// })                                             

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
