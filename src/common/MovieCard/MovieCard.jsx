import React from "react";
import { Badge } from "react-bootstrap";
import './MovieCard.style.css'
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";


const MovieCard = ({ movie }) => {

  const {data:genreData} = useMovieGenreQuery();
  
  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList = genreIdList.map((id)=>{
      const genreObject = genreData.find((genre)=>genre.id === id)
      return genreObject.name;
    });

    return genreNameList
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div className="movie-genre-area">
          {showGenre(movie.genre_ids).map((id)=><Badge bg="danger">{id}</Badge>)}
          </div>
        <div>
           <div className="movie-vote-area">{movie.vote_average}</div>
           <div>{movie.popularity}</div>
           <div>{movie.adult?'over18':'under18'}</div>
        </div>
       
      </div>
    </div>
  );
};

export default MovieCard;
