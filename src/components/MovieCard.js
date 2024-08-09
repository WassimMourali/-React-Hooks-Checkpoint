import React from 'react';
import { FaStar } from 'react-icons/fa';
import './MovieCard.css'; 

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-description">{description}</p>
      <div className="movie-rating">
        {[...Array(6)].map((_, index) => (
          <FaStar key={index} color={index < Math.round(rating) ? '#ffd700' : '#e4e5e9'} />
        ))}
      </div>

    </div>
  );
};

export default MovieCard;
