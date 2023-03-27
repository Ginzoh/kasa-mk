import homeImage from 'assets/home_image.png'
import './Home.css';
import LocationCover from 'components/LocationCover/LocationCover';
import logements from 'data/logements.json';

const Home = () => {
  return (
    <main className='HomePage'>
      <div className="homeImageContainer">
        <img src={homeImage} alt="" className='homeImage' />
      </div>
      <article>
        <div className="locationContainer">
          {logements.map((item) => (
            <LocationCover
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
            />
          ))}
        </div>
      </article>
    </main>
  );
}

export default Home;
