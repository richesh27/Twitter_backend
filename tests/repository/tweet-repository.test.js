import TweetRepository from '../../src/repository/tweet-repository.js'
import Tweet from '../../src/models/tweet.js'

jest.mock('../../src/models/tweet.js')

describe(' creating tweet ', ()=>{
    test('should create a new tweet and return it', async ()=>{
        const data = {
            content : 'testing tweet'
        }
    
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(()=>{
            return {...data, createdAt: '2023-06-05', updatedAt : '2023-06-05' }
        });
    
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
    
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
    });
    
    
    test('should create a new tweet and return it', async ()=>{
        const data = {
            content : 'testing tweet'
        }
    
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(()=>{
            throw new Error('something went wrong')
        });
    
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch(err=> {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wrong')
        });
    });
});


describe('getting all tweets tests', ()=>{
    test("testing limit for get all", async()=>{
        const data = {
            content : ' testing tweet'
        };
        const tweetArray = [{...data, createdAt: '2023-06-05', updatedAt : '2023-06-05' }, {...data, createdAt: '2023-06-05', updatedAt : '2023-06-05' }, {...data, createdAt: '2023-06-05', updatedAt : '2023-06-05' }];
        const findResponse  = { tweetArray};
        findResponse.limit = jest.fn((limit)=> findResponse.tweetArray.slice(0, limit));
        findResponse.skip = jest.fn((offset)=> findResponse);
        
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(()=>{
            return findResponse
        });

        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0,2);
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    });
});

