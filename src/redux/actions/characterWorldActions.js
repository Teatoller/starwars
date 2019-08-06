import { SET_CHARACTER_WORLD } from "../constants/characterWorldTypes";

export const getCharacterWorld = url => {
  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(world => dispatch(setCharacterWorld(world)));
};

export const setCharacterWorld = world => {
  return {
    type: SET_CHARACTER_WORLD,
    world
  };
};
