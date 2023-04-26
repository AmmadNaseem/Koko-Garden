const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SchoolModel = require('../models/school.model');
const router = express.Router();
const mongoose = require('mongoose');


router.post('/register', async (req, res) => {
  try {
    const { name, email, password, address, city, state, country, zip, website, logo } = req.body;

    const school = await SchoolModel.findOne({ email });
    if (school) {
      res.status(400).json({ error: 'School is already exist, please login!' });
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newSchool = {
      id: '',
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      city,
      state,
      country,
      zip,
      website,
      logo,
      total_trees:0
    };

    const dbSchool = await SchoolModel.create(newSchool);
    res.json(generateTokenResponse(dbSchool));
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const school = await SchoolModel.findOne({email}).select('+password');
    if (!school) {
      res.status(400).json({ error: 'Username or password is invalid!' });
      return;
    }

    const match = await bcrypt.compare(password, school.password);
    if (match) {
      res.json(generateTokenResponse(school));
    } else {
      res.status(400).json({ error: 'Username or password is invalid!' });
    }
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});



const generateTokenResponse = (school) => {
  const token = jwt.sign(
    {
      id: school.id,
      email: school.email,
      name: school.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  return {
    token: token,
  };
};

module.exports = router;
