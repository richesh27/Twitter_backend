class CrudRepository {
    constructor (model){
        this.model= model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            console.log("in crud repo")
            return result;
        } 
        catch (error) {
            console.log("Something wrong in crud repo layer");
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } 
        catch (error) {
            console.log("Something wrong in crud repo layer");
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } 
        catch (error) {
            console.log("Something wrong in crud repo layer");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.find({});
            return result;
        } 
        catch (error) {
            console.log("Something wrong in crud repo layer");
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new:true});
            return result;
        } 
        catch (error) {
            console.log("Something wrong in crud repo layer");
            throw error;
        }
    }
}

export default CrudRepository;