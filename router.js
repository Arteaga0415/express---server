const express = require('express');
const { User } = require('./models')
const router = express.Router()

router.get('/routes', (req, res) => {
  res.send('hello world with router')
});

router.get('/getuser', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (error) {
    res.status(500)
    console.log('Error getting users: ', error);
  }
});

router.post('/postuser', async (req, res) => {
  try {
    const users = new User(req.body);
    //check that the user 
    await users.save();
    res.status(201).json(users);
  } catch (error) {
    res.status(500)
    console.log('Error getting users: ', error);
  }
});

module.exports = router;