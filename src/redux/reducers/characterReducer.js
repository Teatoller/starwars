import { SET_CHARACTERS } from '../actions/characterActions';

const initialState = [];

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
};

export default characterReducer;
