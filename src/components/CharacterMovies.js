import React from "react";
import { connect } from "react-redux";
import './Style.css';


const CharacterMovies = ({ movies }) => (
  <div className="character-movie" >
    <h1>Movies</h1>
    <ul>
      {movies.map(movie => {
        const dateArray = movie.release_date.split("-");

        return (
          <li key={movie.title}>
            {movie.title} ({dateArray[0]})
          </li>
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    movies: state.characterMovieReducer
  };
};

export default connect(mapStateToProps)(CharacterMovies);
