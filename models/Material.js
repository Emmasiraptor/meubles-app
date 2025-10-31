const mongoose = require("mongoose");
const MaterialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  description: String,
  keywords: [String],
}, { timestamps: true });
module.exports = mongoose.model("Material", MaterialSchema);
