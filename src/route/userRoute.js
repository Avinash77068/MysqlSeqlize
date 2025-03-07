import express from 'express'
import { createUser, deleteUser, getUser, getUserById, updateUser } from '../controller/userController.js'

const router =express.Router()

/// create a new users
router.post('/add',createUser)

/// get all users 
 router.get('/',getUser)

 /// get all users by id
  router.get('/:id',getUserById)

/// update a user by id 
 router.put('/:id',updateUser)

 // deleted all users by id 
 router.delete('/:id',deleteUser)

 export default router;
