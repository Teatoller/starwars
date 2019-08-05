import { API_URL } from "../constants/characterTypes";
import { getCharacterWorld } from "./characterWorldActions";
import { getCharacterMovies } from "./characterMoviesActions";

export const SET_CHARACTER_PROFILE = "SET_CHARACTER_PROFILE";

export function getCharacterProfile(id) {
  return dispatch =>
    fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setCharacterProfile(profile));
        dispatch(getCharacterWorld(profile.homeworld));
        dispatch(getCharacterMovies(profile.films));
      });
}

export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile
  };
}

export default setCharacterProfile;
