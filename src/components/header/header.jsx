import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import HomeStyle from '../../../public/home.scss';
/* Images */;

const Nav = ({
 
}) => (
  <section id="header" className={HomeStyle.home}>
    <header className={HomeStyle.header_home} >
      <div className={HomeStyle.header_home_logo}>
        <h1>Cristóbal Maturana</h1>
        <span ><i className={`${HomeStyle.fa} ${HomeStyle["fa-bars"]}`} aria-hidden="true"></i></span>
      </div>
      <nav  className={HomeStyle.header_home_nav}>      
        <ul id="nav_home" className={HomeStyle.nav_active}>
          <li><Link className="navbar-brand" to="/">Listado Producto</Link></li>
          <li><Link className="navbar-text" to="/cart"><i className={`${HomeStyle.fa} ${HomeStyle["fa-shopping-cart"]}`} aria-hidden="true"></i> Ver carrito de compras</Link></li>
        </ul>
      </nav>
    </header>
  </section>
);

export default Nav;