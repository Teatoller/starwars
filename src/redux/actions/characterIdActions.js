import { SET_CURRENT_CHARACTER } from "../constants/characterIdTypes";

const setCurrentCharacter = id => {
  return {
    type: SET_CURRENT_CHARACTER,
    id
  };
};

export default setCurrentCharacter;
