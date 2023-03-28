import { useState, useEffect } from 'react';
import './LocationRender.css';
import ButtonWithText from 'components/ButtonWithText.js/ButtonWithText';
import { useParams } from 'react-router-dom';
import logements from 'data/logements.json';
import ErrorPage from 'views/ErrorPage/ErrorPage';

const LocationRender = () => {
  const { id } = useParams();
  const [filledStars, setFilledStars] = useState(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const logement = logements.find(item => item.id === id);

  useEffect(() => {
    if (!logement) {
      return;
    }

    setFilledStars(parseInt(logement.rating));
  }, [logement]);

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

  if (!logement) {
    return <ErrorPage />;
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`fa fa-star${i < filledStars ? ' filled' : ''}`}
        style={isMobile ? { marginRight: i !== 4 ? '0px' : '0' } : { marginRight: i !== 4 ? '10px' : '0' }}
      ></span>
    );
  }
  const equiText = logement.equipments.map((equipment, index) => (
    <span key={index}>{equipment}<br /></span>
  ));

  const [firstName, lastName] = logement.host.name.split(' ');
  const formattedName = `${firstName}\n${lastName}`;

  const handlePrevPicture = () => {
    if (logement.pictures.length <= 1) return;

    if (currentPictureIndex === 0) {
      setCurrentPictureIndex(logement.pictures.length - 1);
    } else {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  };

  const handleNextPicture = () => {
    if (logement.pictures.length <= 1) return;

    if (currentPictureIndex === logement.pictures.length - 1) {
      setCurrentPictureIndex(0);
    } else {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  };

  return (
    <main className='LocationRender'>
      <div className="imageContainer">
        {logement.pictures.length > 1 && (
          <div className="arrow left" onClick={handlePrevPicture}>
            <span className="fa fa-chevron-left"></span>
          </div>
        )}
        {logement.pictures.length > 1 && (
          <div className="arrow right" onClick={handleNextPicture}>
            <span className="fa fa-chevron-right"></span>
          </div>
        )}
        <img className='AppartImage' src={logement.pictures[currentPictureIndex]} alt="Appartement" />
      </div>
      {isMobile ? <section>
        <div className="information">
          <div className='LocaLoca'>
            <h1 className='LogTitle'>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
        </div>
        <div className='tagsStars'>
          <div className='locaTags'>
            {logement.tags.map((equip, index) => (
              <span key={index} className='locaTag'>{equip}</span>
            ))}
          </div>
          <div className="starName">
            <div className="star-rating">{stars}</div>
            <div className='namePicture'>
              <p className="name">{formattedName}<br className="name-br" /></p>
              <img src={logement.host.picture} alt="" />
            </div>
          </div>
        </div>
      </section> : <section>
        <div className="information">
          <div className='LocaLoca'>
            <h1 className='LogTitle'>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className='namePicture'>
            <p className="name">{formattedName}<br className="name-br" /></p>
            <img src={logement.host.picture} alt="" />
          </div>
        </div>
        <div className='tagsStars'>
          <div className='locaTags'>
            {logement.tags.map((equip, index) => (
              <span key={index} className='locaTag'>{equip}</span>
            ))}
          </div>
          <div className="star-rating">{stars}</div>
        </div>
      </section>}
      <section>
        <div className="descEquip">
          <ButtonWithText buttonText="Description" text={logement.description} />
          <ButtonWithText buttonText="Équipements" text={equiText} />
        </div>
      </section>
    </main>
  );
};

export default LocationRender;
