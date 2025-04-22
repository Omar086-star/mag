import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFormStatus('Veuillez remplir tous les champs');
      return;
    }

    const formData = {
      name,
      email,
      message,
      date: new Date().toISOString().split('T')[0],
      berth: 'New York',  // Exemple de champ
      contry: 'USA',  // Exemple de champ
    };

    try {
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormStatus(data.message);  // Affichage du message retourné par le backend
      } else {
        setFormStatus('Erreur lors de l\'envoi de votre demande');
      }
    } catch (error) {
      setFormStatus('Une erreur s\'est produite');
      console.error('Erreur:', error);
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {formStatus && <p>{formStatus}</p>}
    </div>
  );
}
