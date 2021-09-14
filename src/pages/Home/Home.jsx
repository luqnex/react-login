import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PagesHome = () => (
  <div className="pages-home">
    Parabéns, você conseguiu
    <br />
    <Link to='/login'>Sair</Link>
  </div>
);

export default PagesHome;
