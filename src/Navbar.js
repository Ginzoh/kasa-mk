import logo from "./assets/logo.png"
import { Link, useMatch } from 'react-router-dom';
import "./css/Navbar.css"
function Navbar() {
  return (
    <div className="Nav">
      <header className="page-header">
        <img src={logo} className="nav-logo" alt="logo" />
        <div className="nav-text">
          <Link to="/" className={useMatch('/') ? 'active-link' : ''}>Acceuil</Link>
          <Link to="about" className={useMatch('/about') ? 'active-link' : ''}>A Propos</Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;