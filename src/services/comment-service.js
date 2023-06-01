import { CommentRepository,TweetRepository } from "../repository/index.js";

class CommentService {
    constructor(){
        this.tweetRepo = new TweetRepository();
        this.commentRepo = new CommentRepository();
    }

    async create( modelId, modelType, userId, content) {
        if(modelType=='Tweet'){
            var commentable = await this.tweetRepo.get(modelId)
        }
        else if( modelType == 'Comment') {
            //todo
            var commentable = await this.commentRepo.get(modelId)
        }
        else{
            throw new Error('unknown model type')
        }

        const comment =  await this.commentRepo.create({
            content : content,
            userId: userId,
            onModel : modelType,
            commentable : modelId,
            comments : []
        });
        console.log(comment)
        commentable.comments.push(comment);
        await commentable.save();   
        return comment;
    }
}

export default CommentService;