import homeImage from 'assets/home_image.png'
import './Home.css';
import { Link } from "react-router-dom";
import logements from 'data/logements.json';



const Home = () => {
  return (
    <main className='HomePage'>
      <div className="homeImageContainer">
        <img src={homeImage} alt="" className='homeImage' />
      </div>
      <article>
        <div className="locationContainer">
          {/* <article> */}
          {logements.map((item) => (
            <Location
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
            />
          ))}


          {/* </article> */}
        </div>
      </article>
    </main>
  );
}
function Location({ id, cover, title }) {
  return (
    <Link to={`/id/${id}`}>
      <div className="location">
        <img src={cover} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
export default Home;
