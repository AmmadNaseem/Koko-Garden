const express = require('express');
const router = express.Router();
const TreesModel = require('../models/trees.model');
const SchoolModel = require('../models/school.model');
const mongoose = require('mongoose');

const auth = require('../middlewares/auth');

router.use('/protected', auth);

router.get("/trees", async (req, res) => {
  try {
    const schoolsTrees = await SchoolModel.find({ total_trees: { $gt: 0 } });
    // Return a success response
    return res.json({
      success: true,
      data: schoolsTrees
    });
  }
  catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }

});

router.get("/leader-board", async (req, res) => {
  try {

    const schoolsTrees = await SchoolModel.find({ total_trees: { $gt: 0 } })
      .select("name total_trees")
      .sort({ total_trees: -1 });

    // Return a success response
    return res.json({
      success: true,
      data: schoolsTrees
    });


  }
  catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }

});

router.get("/forest-map-trees", async (req, res) => {
  try {
    TreesModel.find().populate('school').then((trees) => {
        return res.json({
          success: true,
          data: trees
        });
    }).catch((err) => {
      res.status(500).json({ error: 'Internal server error:'+err });
    });
   
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
  
  
 

});

router.get("/total-planted-trees", async (req, res) => {
  try {
    const totalPlantedTrees = await TreesModel.aggregate([
      {
        $match: {
          no_of_trees: { $gt: 0 }
        }
      },
      {
        $group: {
          _id: null,
          totalTrees: { $sum: '$no_of_trees' }
        }
      }
    ]);
    // Return a success response
    return res.json({
      success: true,
      data: totalPlantedTrees[0].totalTrees
    });
  }
  catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }

});

router.post('/protected/donate-trees', async (req, res) => {
  try {
    // Get the donor's information from the request body
    const { name, type, latitude, longitude, treesDonated } = req.body;


    // Create a new trees donation object
    const treesDonation = new TreesModel({
      school: req.school.id,
      name: name,
      type: type,
      latitude: latitude,
      longitude: longitude,
      no_of_trees: treesDonated,
    });

    // Save the donation to the database
    const savedDonation = await treesDonation.save();

    // Find the school in the database
    const school = await SchoolModel.findById(req.school.id);

    // Update the school's total number of trees
    school.total_trees += Number(treesDonated);
    await school.save();

    // Return a success response
    return res.json({ success: true });
  }
  catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

module.exports = router;
