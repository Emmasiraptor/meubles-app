// routes/materialRoutes.js
const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// Route pour afficher toutes les matières
router.get('/', async (req, res) => {
  try {
    const materials = await Material.find().populate('companyId');
    res.render('materials', { title: 'Matières', materials });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
