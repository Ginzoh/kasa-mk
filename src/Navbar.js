import logo from "./assets/logo.png"

function Navbar() {
  return (
    <div className="Nav">
      <header className="page-header">
        <img src={logo} className="nav-logo" alt="logo" />
        <div className="nav-text">
          <a href="/">Acceuil</a>
          <a href="/">A Propos</a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;