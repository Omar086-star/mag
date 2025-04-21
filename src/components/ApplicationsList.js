// import React, { useState, useEffect } from 'react';

// export default function ApplicationsList() {
//   const [applications, setApplications] = useState([]);

//   // Fonction pour récupérer les applications du backend
//   useEffect(() => {
//     fetch('http://localhost:5000/api/applications')
//       .then((response) => response.json())
//       .then((data) => setApplications(data)) // Mettre à jour l'état avec les données récupérées
//       .catch((error) => console.error('Erreur lors de la récupération des applications:', error));
//   }, []);  // [] signifie que l'effet se déclenche une seule fois au montage du composant

//   return (
//     <div>
//       <h2>Liste des demandes</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Email</th>
//             <th>Message</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((application) => (
//             <tr key={application.id}>
//               <td>{application.name}</td>
//               <td>{application.email}</td>
//               <td>{application.message}</td>
//               <td>{application.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';

function ApplicationsList() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Requête à l'API pour récupérer les données
    fetch('/api/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Applications</h1>
      <ul>
        {applications.map((app, index) => (
          <li key={index}>{app.name} - {app.email} - {app.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationsList;
