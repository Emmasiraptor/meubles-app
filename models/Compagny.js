const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contact: { email: String, phone: String },
  address: String,
}, { timestamps: true });
module.exports = mongoose.model("Company", CompanySchema);
