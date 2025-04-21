import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import BoxArticle from '../components/BoxArticle';
import Activite from '../components/Acitvite';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [pdfToShow, setPdfToShow] = useState(null); // pour afficher un PDF sélectionné

  useEffect(() => {
    const fetchedArticles = [
      { id: 1, title: '   ', content: ' ' },
      { id: 2, title: ' ', content: ' ' },
      { id: 3, title: ' ', content: ' ' },
    
    ];
    setArticles(fetchedArticles);
  }, []);

  // Fonction pour afficher le PDF
  const handleShowPdf = (articleId) => {
    setPdfToShow(`../images/${articleId}.pdf`);
  };


  return (
    <div className=''>
      <div className='Main_Plan'>
        
<div className=''>

</div>
        

        <div className="MAIN_A">
        <div className='clssSlide'>
          
        </div>

<div className='headDiv'>
  
          <Activite />
          <h2>  انتظرونا قريباً مع الكثير من المتعة والتشويق والعلوم ......  </h2>

          <BoxArticle />
        </div>


        </div>
        <div className="MAIN_B">
          <div className="B_a3">
            {articles.slice(0, 4).map((article) => (
              <div className='contentBox' key={article.id}>
                <BoxArticle article={article} />

<div className='telechargable'>  <a href={`../images/${article.id}.pdf`} download>
                  <button className="buttunDownload">تحميل المجلة</button>
                </a>
                
                {/* Bouton pour afficher le contenu du PDF */}
                <button
                  className="buttunAfficher"
                  onClick={() => handleShowPdf(article.id)}
                >
                  عرض المحتوى
                </button>       </div>
                

              </div>
            ))}
            <Link to="/Article">
              <button className="buttunNext">+</button>
            </Link>
          </div>
        </div>

        {/* Affichage du PDF dans un iframe si un fichier est sélectionné */}
        {pdfToShow && (
          <div className="pdfViewer">
            <iframe
              src={pdfToShow}
              width="100%"
              height="600px"
              title="PDF Viewer"
            />
          </div>
        )}
      </div>
    </div>
  );
}



