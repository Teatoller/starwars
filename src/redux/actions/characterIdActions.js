// import { SET_CURRENT_CHARACTER } from '../constants/characterIdTypes';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';

export function setCurrentCharacter(id) {
    return {
      type: SET_CURRENT_CHARACTER,
      id,
    };
  }

//   export default setCurrentCharacter;
