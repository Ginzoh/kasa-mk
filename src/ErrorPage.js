import './css/ErrorPage.css';

const ErrorPage = () => {
  return (
    <section>
      <h1 className='Error404'>404</h1>
      <p className='oups'> Oups! La page que vous demandez n'existe pas</p>
    </section>
  );
}

export default ErrorPage;