import './ErrorPage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ErrorPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className='ErrorContent'>
      <h1 className='Error404'>404</h1>
      <p className='oups'> Oups! La page que {isMobile ? <br /> : ''} vous demandez n'existe pas</p>
      <Link to='/'><p className='homeLink'>Retourner sur la page d'acceuil</p></Link>
    </main>
  );
}

export default ErrorPage;