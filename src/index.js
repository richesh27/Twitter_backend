const express =  require("express")

const connect =  require('./config/database');

const app = express();
const {TweetRepository} = require('./repository/index')
const TweetService = require('./services/tweet-service')
let service =  new TweetService();

app.listen(3000, async ()=>{
    console.log("Server started at Port");
    await connect();
    console.log("mongoDB connected")
    
    // const tweet =await service.create({
    //     content : ' My friends studied #java from a #long time since #college'
    // });
    // console.log(tweet)

    
})