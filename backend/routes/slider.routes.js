import express from "express";
import Slider from "../models/Slider.models.js";
import checkAdminCreds from "../middleware/authEnv.js";

const router = express.Router();

// public: list active slides (ordered)
router.get("/", async (req, res) => {
  try {
    const slides = await Slider.find({ active: true }).sort({ order: 1 }).lean();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// admin: create slide
router.post("/create", checkAdminCreds, async (req, res) => {
  try {
    const slide = await Slider.create(req.body);
    res.json({ success: true, slide });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// admin: update
router.post("/update/:id", checkAdminCreds, async (req, res) => {
  try {
    const slide = await Slider.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json({ success: true, slide });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// admin: delete
router.delete("/delete/:id", checkAdminCreds, async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
