import express from 'express';

import {connect} from './config/database.js';

import TweetService from './services/tweet-service.js';

const app = express();


app.listen(3000, async ()=>{
    console.log("Server started at Port");
    await connect();
    console.log("mongoDB connected")
    let ser = new TweetService();

    const tweet = await ser.create({
        content : ' done with #common moduling'
    })
    // const tweet =await service.create({
    //     content : ' My friends studied #java from a #long time since #college'
    // });
    // console.log(tweet)

    
})