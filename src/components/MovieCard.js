import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MovieCard.css';

const MovieCard = ({ imagePath, imageTitle, imageRating, movieId }) => {
  return (
    <Link to={`/movie/${movieId}`} className="movie-card">
      <img src={imagePath} alt={imageTitle} />
      <div className="movie-info">
        <h3>{imageTitle}</h3>
        <p>Rating: {imageRating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
