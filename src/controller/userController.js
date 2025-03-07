import pkg from 'joi';
const { validate} = pkg;
import { userModel } from '../model/userModel.js';
import { userSchema } from '../middleware/userValidate.js';
//creating an user
export const createUser = async (req, res) => {
   
  try {
     // validate req
    const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  const user = await userModel.create(req.body);
  return res.status(201).json(user);
  } catch (error) {
    res.status(400).json({message:error.message})
    console.log('Error occured',error.message)
  }
};

// getttinf an user
export const getUser =async (req, res) => {
    try {
        const user=await userModel.findAll()
        return res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    console.log('Error occured',error.message)
    }
};

// get user detials by id
export const getUserById = async(req, res) => {
    try {
        const user=await userModel.findByPk(req.params.id)
        return res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    console.log('Error occured',error.message)
    }
};
// update user by id or name or detials
export const updateUser =async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).json(error.details[0].message);
        const user=await userModel.findByPk(req.params.id)
        if(!user){
            return res.status(400).json({msg:'user not found'})
        }
        await userModel.update(req.body)
        return res.status(200).json({msg:'user updated'})
    } catch (error) {
        res.status(400).json({message:error.message})
    console.log('Error occured',error.message)
    }
};

// delete user by id
export const deleteUser = (req, res) => {};
