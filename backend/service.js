// const mysql = require('mysql2');

// // Créez la connexion à la base de données MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',  // L'hôte de la base de données (localhost pour une installation locale)
//   user: 'your_username',  // L'utilisateur MySQL
//   password: 'your_password',  // Le mot de passe de l'utilisateur
//   database: 'team_app',  // Le nom de la base de données
// });

// // Connectez-vous à la base de données
// connection.connect((err) => {
//   if (err) {
//     console.error('Erreur de connexion à MySQL :', err.stack);
//     return;
//   }
//   console.log('Connecté à la base de données MySQL avec l\'ID', connection.threadId);
// });

// // Fonction pour enregistrer une application dans la base de données
// const addApplication = (name, email, message, date, berth, contry, res) => {
//   const query = 'INSERT INTO applications (name, email, message, date, berth, contry) VALUES (?, ?, ?, ?, ?, ?)';
//   connection.query(query, [name, email, message, date, berth, contry], (err, results) => {
//     if (err) {
//       console.error('Erreur lors de l\'enregistrement de l\'application:', err);
//       return res.status(500).json({ message: 'Une erreur est survenue' });
//     }
//     res.status(200).json({ message: 'Demande enregistrée avec succès' });
//   });
// };

// module.exports = { addApplication };



const mysql = require('mysql2');

// Créez la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',  // L'hôte de la base de données (localhost pour une installation locale)
  user: 'your_username',  // L'utilisateur MySQL
  password: 'your_password',  // Le mot de passe de l'utilisateur
  database: 'team_app',  // Le nom de la base de données
});

// Connectez-vous à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'ID', connection.threadId);
});

// Fonction pour enregistrer une application dans la base de données
const addApplication = (name, email, message, date, berth, contry, res) => {
  const query = 'INSERT INTO applications (name, email, message, date, berth, contry) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [name, email, message, date, berth, contry], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement de l\'application:', err);
      return res.status(500).json({ message: 'Une erreur est survenue' });
    }
    res.status(200).json({ message: 'Demande enregistrée avec succès' });
  });
};

// Fonction pour récupérer toutes les applications de la base de données
const getApplications = (res) => {
  const query = 'SELECT * FROM applications'; // Requête SQL pour récupérer toutes les applications
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des applications:', err);
      return res.status(500).json({ message: 'Une erreur est survenue' });
    }
    res.status(200).json(results);  // Retourner les résultats à l'utilisateur
  });
};

module.exports = { addApplication, getApplications };
