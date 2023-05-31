import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;    
        } 
        catch (error) {
            console.log("something wrong in like repo layer");
            throw error;    
        }
    }
}

export default LikeRepository