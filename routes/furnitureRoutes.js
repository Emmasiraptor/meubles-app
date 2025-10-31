// routes/furnitureRoutes.js
const express = require('express');
const router = express.Router();
const Furniture = require('../models/Furniture');
const Category = require('../models/Category');
const Material = require('../models/Material');

// Liste tous les meubles
router.get('/', async (req, res) => {
  try {
    const furnitures = await Furniture.find()
      .populate('categoryId')
      .populate('materials');
    res.render('furnitures', { title: 'Meubles', furnitures });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

// Détails d'un meuble
router.get('/:id', async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id)
      .populate('categoryId')
      .populate('materials');
    if (!furniture) return res.status(404).send('Meuble non trouvé');
    res.render('furnitureDetail', { title: furniture.title, furniture });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
