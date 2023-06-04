import {getTweet} from  '../../src/controllers/tweet-controller.js'
import TweetService from '../../src/services/tweet-service.js'
import {mockRequest,mockResponse} from '../mocker.js'

jest.mock('../../src/services/tweet-service.js')

test('should get us the tweets', async() => { 
    const res = mockResponse();
    const req = mockRequest();
    
    const response = [
        {
            content: "tweet 1"
        },
        {
            content : "Tweet 2"
        }
    ];

    (TweetService.prototype.get).mockReturnValue(response);
    await getTweet(req,res);
    expect(res.json).toHaveBeenCalledWith({
        success : true,
            data : response,
            err: {},
            message : "Successfully fetched tweet"
    });
});