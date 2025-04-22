const mongoose = require('mongoose');

// Connecter à MongoDB
mongoose.connect('mongodb://localhost:27017/adhesion', { useNewUrlParser: true, useUnifiedTopology: true });

// Définir un modèle de données pour l'application
const Application = mongoose.model('Application', {
  name: String,
  email: String,
  message: String,
  date: String,
  berth: String,
  contry: String,
  cv: String,  // Optionnel
});

app.post('/api/applications', (req, res) => {
  const application = new Application(req.body);
  
  application.save()
    .then(() => {
      res.status(200).json({ message: 'Demande enregistrée avec succès' });
    })
    .catch(err => {
      console.error('Erreur de sauvegarde dans la base de données:', err);
      res.status(500).json({ message: 'Une erreur est survenue' });
    });
});
