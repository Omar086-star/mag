import React from 'react';
import nouvelle from '../images/test.jpg'
import './style.css';
import { Link } from 'react-router-dom';
export default function BoxArticle() {
  return (
    <div className='BoxArticles'>
<Link to={"/article"}>  
    
      <img className='imgTest' src={nouvelle} alt={'هذا العدد الجديد'} />
</Link>
    </div>
  )
}
