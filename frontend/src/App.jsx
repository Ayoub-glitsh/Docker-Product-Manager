import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [produits, setProduits] = useState([]);
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000/produits';

  // Charger les produits au démarrage
  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Erreur lors de la récupération des produits');
      const data = await response.json();
      setProduits(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const ajouterProduit = async (e) => {
    e.preventDefault();
    if (!nom || !prix) return alert('Veuillez remplir tous les champs');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prix: Number(prix) })
      });

      if (!response.ok) throw new Error('Erreur lors de l’ajout du produit');

      setNom('');
      setPrix('');
      fetchProduits(); // Rafraîchir la liste
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Gestion des Produits</h1>

      <form onSubmit={ajouterProduit} className="form-produit">
        <input
          type="text"
          placeholder="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {loading && <p>Chargement...</p>}
      {error && <p className="error">{error}</p>}

      <div className="liste-produits">
        <h2>Liste des produits</h2>
        {produits.length === 0 ? (
          <p>Aucun produit trouvé.</p>
        ) : (
          <ul>
            {produits.map((p) => (
              <li key={p._id}>
                <strong>{p.nom}</strong> - {p.prix} €
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
