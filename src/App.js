import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotOver from './components/BotOver';
import './App.css';

// Importer vos pages
import Homme from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Articles from './pages/Articles';
import Error from './pages/Error';
import NosActivite from './pages/NosActivite';
import ContactForm from './components/Contact';
import WithUs from './components/WithUs';
import ApplicationsList from './components/ApplicationsList'; // Importer le composant ApplicationsList

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Affiche la barre de navigation sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Homme />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} /> {/* Page pour ajouter un article */}
        <Route path="/article" element={<Articles />} />
        <Route path="/nos-activite" element={<NosActivite />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/WithUs" element={<WithUs />} />
        <Route path="/applications" element={<ApplicationsList />} />  {/* Ajouter la route pour afficher les demandes */}

        <Route path="*" element={<Error />} /> {/* Page d'erreur si aucune route ne correspond */}
      </Routes>
      <BotOver /> {/* Affiche le footer ou autre composant en bas de page */}
      <Footer /> {/* Affiche le footer sur toutes les pages */}
    </Router>
  );
}
