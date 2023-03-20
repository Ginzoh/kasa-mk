import homeImage from './assets/home_image.png'
import './css/Home.css';

const Home = () => {
  return (
    <main className='HomePage'>
      <div className="homeImageContainer">
        <img src={homeImage} alt="" className='homeImage' />
      </div>
      <div className="locationContainer">
        <article>
          <div className="location">
            <p>Titre de la location</p>
          </div>
          <div className="location"></div>
          <div className="location"></div>
          <div className="location"></div>
          <div className="location"></div>
          <div className="location"></div>
        </article>
      </div>
    </main>
  );
}

export default Home;