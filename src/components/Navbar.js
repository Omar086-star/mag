import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logopx.png';
import './style.css';

export default function Navbar() {
  return (
    <nav className='nav_pro'>
      <Link to="/"><img className='LogoMag' src={logo} alt={"logo"} /></Link>
      <ul className='List_NavBar'>
        <li className='NavBar_List'><Link className='NavBar_List' to="/">الرئيسية</Link></li>
        <li className='NavBar_List'><Link className='NavBar_List' to="/article">الإصدارات</Link></li>
        <li className='NavBar_List'><Link className='NavBar_List' to="/nos-activite">النشاطات</Link></li>
        <li className='NavBar_List'><Link className='NavBar_List' to="/about">عن المجلة</Link></li>
        <li className='NavBar_List'><Link className='NavBar_List' to="/admin">إدارة</Link></li>
      </ul>
    </nav>
  );
}
