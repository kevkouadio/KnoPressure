const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

// get all data
router.get("/api/bp", isAuthenticated, async (req, res) => {
  try {
    const bp = await db.BPData.find({ userID: req.user.id });
    res.json(bp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// create a single new data
router.post("/api/bp", isAuthenticated, async (req, res) => {
  try {
    const bp = await db.BPData.create({ ...req.body, userID: req.user.id });
    res.json(bp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
    n;
  }
});

// read one task by data id
router.get("/api/bp/:id", isAuthenticated, async (req, res) => {
  try {
    const bp = await db.BPData.findById({ _id: req.params.id });
    res.json(bp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// Update one data by id
router.put("/api/bp/:id", isAuthenticated, async (req, res) => {
  try {
    const bp = await db.BPData.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(bp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// delete one data by task id
router.delete("/api/bp/:id", isAuthenticated, async (req, res) => {
  try {
    const bp = await db.BPData.remove({ _id: req.params.id });
    res.json(bp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// export the router
module.exports = router;