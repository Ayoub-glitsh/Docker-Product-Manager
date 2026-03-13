const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/gestionProduits';

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));

// Modèle de données
const produitSchema = new mongoose.Schema({
  nom: String,
  prix: Number
});

const Produit = mongoose.model('Produit', produitSchema, 'produits');

// Routes
// GET /produits -> Retourner la liste des produits
app.get('/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /produits -> Ajouter un produit
app.post('/produits', async (req, res) => {
  const produit = new Produit({
    nom: req.body.nom,
    prix: req.body.prix
  });

  try {
    const nouveauProduit = await produit.save();
    res.status(201).json(nouveauProduit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
