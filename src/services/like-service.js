import {LikeRepository,TweetRepository} from '../repository/index.js'

class LikeService {

    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {      //  /api/v1/likes/toggle?id=modelId&type=modelType

        if(modelType=='Tweet'){
            var likeable = await this.tweetRepository.find(modelId)
        }
        else if( modelType == 'Comment') {
            //todo
        }
        else{
            throw new Error('unknown model type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({ // we find whether a like has been done or not
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        console.log(exists);
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }

        return isAdded;
    }
}

export default LikeService;