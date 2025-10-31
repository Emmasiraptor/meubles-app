// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Liste toutes les catégories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('categories', { title: 'Catégories', categories });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

// Détails d'une catégorie
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('Catégorie non trouvée');
    res.render('categoryDetail', { title: category.name, category });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
