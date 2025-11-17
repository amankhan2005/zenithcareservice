import mongoose from "mongoose";

const SlideSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  link: { type: String, default: "" },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Slider", SlideSchema);
