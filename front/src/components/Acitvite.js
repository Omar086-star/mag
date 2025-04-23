import React from 'react';
import nouvelle from '../images/testt.png'
import './style.css';
import { Link } from 'react-router-dom';
export default function Activite() {
  return (
    <div className='Activite'>
<Link to={"/nos-activite"}> 
      <img className='imgTest' src={nouvelle} alt={'هذا العدد الجديد'} />    </Link>
      
    </div>
  )
}
