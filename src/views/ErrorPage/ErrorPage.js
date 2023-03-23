import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section>
      <h1 className='Error404'>404</h1>
      <p className='oups'> Oups! La page que vous demandez n'existe pas</p>
      <Link to='/'><p className='homeLink'>Retourner sur la page d'acceuil</p></Link>
    </section>
  );
}

export default ErrorPage;