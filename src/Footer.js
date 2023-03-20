import logo from "./assets/footer-logo.png"
import './css/Footer.css'
const Footer = () => {
  return (
    <footer>
      <img src={logo} className="footer-logo" alt="footer-logo" />
      <small>© 2020 Kasa. All rights reserved</small>
    </footer>
  );
}

export default Footer;