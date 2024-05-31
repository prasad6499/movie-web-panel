import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviedetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState({ cast: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCredits(data);
      } catch (error) {
        setError("Error fetching credits.");
      }
    };

    fetchMovieDetails();
    fetchCredits();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    // <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center',backgroundColor:'black' }}>
    //   <div>
    // <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} style={{ width: '30%', height: '30%', objectFit: 'cover' }} />
    //   </div>
    //   <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop:'20px',alignItems: 'center', marginBottom: '20px' }}>
    //     <div style={{ width: '50%',height:'50%', paddingRight: '20px' }}>
    //       <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} style={{ width: '50%', height: '50%', objectFit: 'cover' }} />
    //     </div>
    // <div style={{ width: '20%', paddingRight: '120px',color:'white' }}>
    //   <h1>{movieDetails.title}</h1>
    //   <p>{movieDetails.overview}</p>
    //   <hr></hr>
    //   <p>Rating : {movieDetails.vote_average}/10</p>
    //   <hr></hr>
    //   <p>Language : English</p>
    //   <hr></hr>
    //   <p>Release Date : {movieDetails.release_date}</p>
    //   <hr></hr>
    // </div>
    //   </div>
    //   <div style={{ width: '100%', display: 'flex', justifyContent: 'center',alignItems:'center',color:'white' }}>
    //     <div style={{ width: '100%', paddingLeft: '10px' }}>
          // <h2 style={{justifyContent:'flex-start',alignItems:'flex-start'}}>Cast</h2>
          // <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0, flexWrap: 'wrap',alignItems:'center',justifyContent: 'center' }}>
          //   {credits.cast.map(actor => (
          //     <li key={actor.cast_id} style={{ marginRight: '20px', width: '200px', textAlign: 'center',justifyContent: 'center' }}>
          //       <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: '140px', height: '190px',display:'fles', borderRadius: '0%', alignItems:'center' }} />
          //       <h3>{actor.name}</h3>
          //       <div style={{marginBottom: '20px',}}>Character: {actor.character}</div>
          //     </li>
          //   ))}
          // </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="movie-details-container">
      <div className="first-row">
        <div className="first-sub-row">
          <div className="first-sub-row1">
            <div className="first-sub-row1-col1">
              <div className="sub-col1">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:'8px' }}
                />
              </div>
              <div className="sub-col2">
                <h3>{movieDetails.title}</h3>

                <p>Rating : {movieDetails.vote_average}/10</p>

                <p>Language : English</p>

                <p>Release Date : {movieDetails.release_date}</p>
              </div>
            </div>
            <div className="first-sub-row1-col2">
              <h3 style={{ color: "white", textAlign: "start" }}>Overview</h3>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
          <div className="first-sub-row2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="backup-path"
            />
          </div>
        </div>
      </div>
      <div className="second-row">
  <h2>Cast</h2>
  <ul className="cast-list">
    {credits.cast.map(actor => (
      <li className="cast-card" key={actor.cast_id}>
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="cast-image" />
        <h3 className="cast-name">{actor.name}</h3>
        <p className="cast-character">Character: {actor.character}</p>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default MovieDetails;
