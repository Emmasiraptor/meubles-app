const mongoose = require("mongoose");
const FurnitureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],
  keywords: [String],
  description: String,
  images: [String],
  dimensions: {
    height: Number,
    width: Number,
    depth: Number,
  },
}, { timestamps: true });
module.exports = mongoose.model("Furniture", FurnitureSchema);
