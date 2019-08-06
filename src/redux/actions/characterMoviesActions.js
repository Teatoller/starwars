import { SET_CHARACTER_MOVIES } from "../constants/characterMovieTypes";

export function getCharacterMovies(moviesUrls) {
  return dispatch =>
    Promise.all(
      moviesUrls.map(movieUrl => fetch(movieUrl).then(res => res.json()))
    ).then(movies => dispatch(setCharacterMovies(movies)));
}

export function setCharacterMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies
  };
}
