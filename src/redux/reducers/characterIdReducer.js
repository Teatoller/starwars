import { SET_CURRENT_CHARACTER } from "../constants/characterIdTypes";

const initialState = 0;

const characterIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHARACTER:
      return action.id;
    default:
      return state;
  }
};

export default characterIdReducer;
