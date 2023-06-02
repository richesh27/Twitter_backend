import UserService from "../services/user-service.js";

const userService  =  new UserService();

export const signup = async(req,res) => {
    try {
        const user  =await  userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        })   
        return res.status(201).json({
            success : true,
            message : " User created successfully",
            data : user,
            err : {}
        });
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            message : "Error in creating user in controller",
            data : {},
            err : error
        });
    }
}
