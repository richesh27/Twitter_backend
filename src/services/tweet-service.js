import {TweetRepository, HashtagRepository} from '../repository/index.js'

class TweetService {

    constructor () {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const hashtag = data.content;
        const tags = hashtag.match(/#[a-zA-Z0-9_]+/g)
                                        .map((tag) => tag.substring(1).toLowerCase());   // this regex extracts hashtags

        const tweet  =  await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags)
        let titleOfPresentTags = alreadyPresentTags.map((tag)=>tag.title) // this will give an array of hashtags which are present in db
        let newTags = tags.filter(tag=> !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title : tag, tweets : [tweet.id]}
        });
        await this.hashtagRepository.bulkcreate(newTags)

        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;


        // ['excited', 'coding', 'js', 'career']  -> ['excited', 'career']

        // todo create hashtags and add here

        /**
         * 1. bulkcreate in mongoose
         * 2. filter title of hashing bases on multiple tags
         * 3. how to add tweet id inside all the hashtags
         */

    }

    async get( tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;