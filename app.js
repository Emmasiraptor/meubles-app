// server.js (ou app.js)
require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db'); // 🔗 Import de la connexion MongoDB

// Initialiser l'app Express
const app = express();

// ✅ Connexion à MongoDB
connectDB();

// Configurer le moteur de rendu Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour parser les formulaires et JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Exemple de route de base
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Accueil',
    message: 'Bienvenue sur mon serveur Express connecté à MongoDB 🚀'
  });
});

// Ajouter la route des matières
app.use('/materials', require('./routes/materialRoutes'));


// Port depuis .env ou par défaut 3000
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
