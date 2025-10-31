// routes/companyRoutes.js
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// Liste toutes les entreprises
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.render('companies', { title: 'Entreprises', companies });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

// Détails d'une entreprise
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).send('Entreprise non trouvée');
    res.render('companyDetail', { title: company.name, company });
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
