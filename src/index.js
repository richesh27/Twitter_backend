const express =  require("express")

const connect =  require('./config/database');

const app = express();

const TweetRepository = require('./repository/tweet-repository');
const tweetRepo = new TweetRepository();

const Comment = require('./models/comment');

app.listen(3000, async ()=>{
    console.log("Server started at Port");
    await connect();
    console.log("mongoDB connected")

    // const tweet = await tweetRepo.create({
    //     content :'My tweet',
    //     userEmail : "m@t.com"
    // });
    // const comment = await Comment.create({
    //     content :'My comment',
    // });
    // tweet.comments.push(comment)
    // await tweet.save();
    // console.log(tweet)
    // const tweets =  await Tweet.find({userEmail: 'a@b.com'});
    // const tweet = await tweetRepo.getWithComments('647300db19b11e0da5398ff4')
    
    // const tweet = await tweetRepo.getAll(5,4)
    // console.log(tweet);
    // console.log(tweet[2].contentWithEmail)

    
})