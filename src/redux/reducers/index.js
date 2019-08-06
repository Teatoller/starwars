import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import characterIdReducer from "./characterIdReducer";
import characterProfileReducer from "./characterProfileReducer";
import characterWorldReducer from "./characterWorldReducer";
import characterMovieReducer from "./characterMovieReducer";

export default combineReducers({
  characterReducer,
  characterIdReducer,
  characterProfileReducer,
  characterWorldReducer,
  characterMovieReducer
});
