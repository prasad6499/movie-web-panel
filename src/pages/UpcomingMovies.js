// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import MovieCard from '../components/MovieCard';
// import '../style/HomePage.css';

// const UpcomingMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchMovies();
//   }, [currentPage]);

//   const fetchMovies = async () => {
//     try {
      // const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`);
//       setMovies(response.data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="home-page">
//       <div className="movies-grid">
//         {movies.map(movie => (
//           <MovieCard
//             key={movie.id}
//             imagePath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             imageTitle={movie.title}
//             imageRating={movie.vote_average}
//           />
//         ))}
//       </div>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default UpcomingMovies;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../style/HomePage.css';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="home-page">
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
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default UpcomingMovies;
