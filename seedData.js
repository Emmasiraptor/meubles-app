const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Company = require("../models/Company");
const Material = require("../models/Material");
const Category = require("../models/Category");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

async function seedData() {
  try {
    await Company.deleteMany();
    await Material.deleteMany();
    await Category.deleteMany();

    const companies = await Company.insertMany([
      { name: "BBois" },
      { name: "MetaLo" },
      { name: "pPlastique" },
    ]);

    const materials = [
      { name: "frêne", type: "Bois", companyId: companies[0]._id },
      { name: "chêne", type: "Bois", companyId: companies[0]._id },
      { name: "noyer", type: "Bois", companyId: companies[0]._id },
      { name: "acier inox", type: "Fer", companyId: companies[1]._id },
      { name: "aluminum", type: "Fer", companyId: companies[1]._id },
      { name: "plastique", type: "Plastique", companyId: companies[2]._id },
    ];
    await Material.insertMany(materials);

    await Category.insertMany([
      { name: "Armoire", slug: "armoire" },
      { name: "Etagère", slug: "etagere" },
    ]);

    console.log("✅ Données initiales insérées !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur:", err);
    process.exit(1);
  }
}

seedData();
