import React, { useState } from 'react';
import './styles.css';
export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fonction pour gérer la soumission de l'article
  const handleSubmit = (event) => {
event.preventDefault();
const newArticle = { title, content };

console.log('Nouvel article ajouté:', newArticle);

setTitle('');
setContent(''); };

  return (
    <div className='Admin_Con'>
      <h1>أضف عنوان جديد</h1>
      <form className='form_Admin' onSubmit={handleSubmit}>
        <div>
          <label>العنوان</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>المحتوى</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">َأضف محتوى</button>
      </form>
    </div>
  );
}

