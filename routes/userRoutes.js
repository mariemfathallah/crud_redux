const express = require('express')
const { addUser, updateUser, deleteUser, getUsers } = require('../Controller/userController')
const router = express.Router()


//add user
router.post('/addUser',addUser)
//update user 
router.put('/updateUser/:id',updateUser)
//delete user
router.delete('/deleteUser/:id',deleteUser)
//get users
router.get('/listeUser',getUsers)


module.exports = router;