import express from "express";
import Slider from "../models/Slider.models.js";
import Contact from "../models/contact.models.js";
import Career from "../models/Application.models.js";
import Settings from "../models/global.models.js";
import checkAdminCreds from "../middleware/authEnv.js";

const router = express.Router();

// Admin-only summary (counts + latest items)
router.get("/summary", checkAdminCreds, async (req, res) => {
  try {
    const slidesCount = await Slider.countDocuments();
    const activeSlides = await Slider.countDocuments({ active: true });
    const contactsCount = await Contact.countDocuments();
    const unhandledContacts = await Contact.countDocuments({ handled: false });
    const careersCount = await Career.countDocuments();
    const activeCareers = await Career.countDocuments({ active: true });
    const settings = await Settings.findOne().lean();

    const latestContacts = await Contact.find().sort({ createdAt: -1 }).limit(5).lean();
    const latestJobs = await Career.find().sort({ createdAt: -1 }).limit(5).lean();

    res.json({
      slidesCount, activeSlides,
      contactsCount, unhandledContacts,
      careersCount, activeCareers,
      settings,
      latestContacts, latestJobs
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
