import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FaSearch } from 'react-icons/fa';  // Import de l'icône de recherche de React Icons
export default function Footer() {
  const [searchTerm, setSearchTerm] = useState("");

  // Fonction pour gérer les changements dans l'input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction pour traiter la soumission de la recherche
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Recherche pour:", searchTerm);
    // Vous pouvez ajouter ici le comportement souhaité, comme une redirection vers une page de résultats ou un filtrage des articles.
  };

  return (
    <footer>
      <div className="Footer_Pro">
        <ul className="list_Footer">
          <span className='spanTag'>تواصل معنا عبر</span>
          <Link className='tagatFooter' to="https://www.facebook.com/8kanoon.maga"><li>Facebook</li></Link>
          <Link className='tagatFooter' to="https://www.instagram.com/8kanoon.maga/#"><li>Instagram</li></Link>
          <Link className='tagatFooter' to="https://x.com/8kanoon_maga"><li>Twitter</li></Link>
          <Link className='tagatFooter' to="/contact"><li>email</li></Link>

        </ul>

        <ul className="list_Footer">
          <span className='spanTag'>شراكاتنا</span>
          <Link className='tagatFooter' to=""><li>Kanoonmovement</li></Link>
          <Link className='tagatFooter' to=""><li>Dier Ezzor</li></Link>
          <Link className='tagatFooter' to=""><li>Taiba</li></Link>
        </ul>

        <ul className="list_Footer">
          <span className='spanTag'>انضم إلينا</span>
          <Link className='tagatFooter' to="/WithUs"><li>أنا معكم</li></Link>

            {/* Formulaire de recherche dans le footer */}
        <form onSubmit={handleSearchSubmit} className="search-form-footer">
          <input
            className='chercher_input'
            type="text"
            placeholder="بحث"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <FaSearch /> {/* Icône de recherche */}
          </button>
        </form>
        </ul>

      
      </div>
    </footer>
  );
}
