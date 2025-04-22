const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importer cors
const { addApplication, getApplications } = require('./service');
const app = express();
const port = 5000;

// Utiliser CORS pour autoriser les requêtes depuis votre frontend (port 3000)
app.use(cors({
  origin: 'https://localhost:3000',  // Permettre uniquement localhost:3000 (frontend)
  methods: ['GET', 'POST'],         // Autoriser les méthodes GET et POST
}));
const corsOptions = {
  origin: 'https://localhost:3000',  // Permet uniquement les requêtes depuis ce domaine
};

app.use(cors(corsOptions));

app.use(cors());  // Permet à tous les domaines d'accéder à l'API

// Utiliser body-parser pour parser les données JSON
app.use(bodyParser.json());

// Route pour enregistrer une nouvelle application
app.post('/api/applications', (req, res) => {
  const { name, email, message, date, berth, contry } = req.body;

  // Appeler la fonction pour enregistrer les données dans MySQL
  addApplication(name, email, message, date, berth, contry, res);

  console.log("Requête reçue sur /api/applications");

});

// Route pour récupérer les applications
app.get('/api/applications', (req, res) => {
  // Simulez la récupération des applications depuis la base de données ou un fichier
  res.json([
    { name: 'Nom 1', email: 'email1@example.com', message: 'Message 1' },
    { name: 'Nom 2', email: 'email2@example.com', message: 'Message 2' }
  ]);
});
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
