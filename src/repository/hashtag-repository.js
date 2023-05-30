const Hashtag = require('../models/hashtags')

class HashtagRepository {

    async create(data){
        try {
            const tag = await Hashtag.create(data);      
            return tag;      
        } 
        catch (error) {
            console.log("Something wrong in the repo Hashtag layer");
            console.log(error)
        }
    }

    async bulkcreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } 
        catch (error) {
            console.log("Something wrong in the repo Hashtag layer")
            console.log(error)
        }
    }

    async get(id){
        try {
            const response = await Hashtag.findById(id);      
            return response;      
        } 
        catch (error) {
            console.log("Something wrong in the repo Hashtag layer")
            console.log(error)
        }
    }

    async destroy(id){
        try {
            const response = await Hashtag.findByIdAndRemove(id);      
            return response;      
        } 
        catch (error) {
            console.log("Something wrong in the repo Hashtag layer")
            console.log(error)
        }
    }

    async findByName( titleList) {
        try {
            const response  = await Hashtag.find({
                title: titleList
            });         // this select function will just give an object of titles and nothing else
            return response;
        } 
        catch (error) {
            console.log("Something wrong in the repo Hashtag layer")
            console.log(error)
        }
    }
}

module.exports = HashtagRepository  ;