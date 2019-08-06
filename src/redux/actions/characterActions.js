import { API_URL } from '../constants/characterTypes';

export const SET_CHARACTERS = 'SET_CHARACTERS';

export function getCharacters() {
  return dispatch =>
    fetch(`${API_URL}/people`)
      .then(res => res.json())
      .then(res => res.results)
      .then(characters => {
        // console.log("characyers", characters)
        dispatch(setCharacters(characters))
      }
      );
}

function setCharacters(characters) {
    return {
      type: SET_CHARACTERS,
      characters,
    };
  }

  export default getCharacters;
