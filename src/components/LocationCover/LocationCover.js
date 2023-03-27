import { Link } from "react-router-dom";

function LocationCover({ id, cover, title }) {
  return (
    <Link to={`/id/${id}`}>
      <div className="location">
        <img src={cover} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default LocationCover;