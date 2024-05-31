const express = require('express');
const { User } = require('./models')
const router = express.Router()

router.get('/routes', (req, res) => {
  res.send('hello world with router')
});

router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      console.error('No users found');
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    console.error('Error finding users: ', error);
  }
});

router.post('/postUsers', async (req, res) => {
  try {
    if (!req.body) {
      console.error('No data in the body found');
    }
    const user = new User(req.body);
    await user.save()
    res.status(201).json(users);
  } catch (error) {
    res.status(500);
    console.error('Error posting users: ', error);
  }
});


module.exports = router;