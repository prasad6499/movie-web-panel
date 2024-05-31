// src/components/SearchPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../style/HomePage.css';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: 'c45a857c193f6302f2b5061c3b85e743',
              language: 'en-US',
              query: query,
              page: 1
            }
          });
          setMovies(response.data.results);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='home-page'>
      <h2>Search Results for "{query}"</h2>
      {movies.length > 0 ? (
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              imagePath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              imageTitle={movie.title}
              imageRating={movie.vote_average}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
