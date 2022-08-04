import User from "../schema/user-schema.js";

// ******************add user******************
export const addUser =async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error) {
        // console.log(error);
        res.status(409).json({message:error.message});
    }
};


//*************get user************* */
export const getUsers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};


//*************get user by id************* */
export const getUser = async (req,res) => {
    // const {id} = req.params.id;
    // console.log(req.params.id);
    try {
        // const user = await User.find({_id:req.params.id});
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

//edit user
export const editUser = async (req,res) => {
    let user = req.body;
    const editUser=new User(user);
    try {
        await User.updateOne({_id:req.params.id},editUser);
        res.status(200).json(editUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

//delete user
export const deleteUser = async (req,res) => {
    try {
        await User.deleteOne({_id:req.params.id});
        res.status(200).json({message:"User deleted successfully"});
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}