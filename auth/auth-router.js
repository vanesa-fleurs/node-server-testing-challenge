const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('./auth-model.js')


// router.get('/users', (req,res) => {
//     Users.getAll()
//         .then(allUsers => {
//             res.status(200).json(allUsers);
//           })
//         .catch(error => {
//             res.status(500).json({error: `You are not allowed to see this content`});
//         })
// })

router.post('/register', (req,res) => {
    let user = req.body;
    console.log("user", user)
    Users.add(user)
        .then(saveU => {
            res.status(201).json(saveU)
        })
        .catch(error => {
            res.status(500).json({ message: 'cannot add the user' });
          });
})





















module.exports = router