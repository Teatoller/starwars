import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { getCharacters } from "./redux/actions/characterActions";
import CharacterList from "./components/CharacterList";
import CharacterProfile from "./components/CharacterProfile";
import CharacterWorld from "./components/CharacterWorld";
import CharacterMovies from "./components/CharacterMovies";

store.dispatch(getCharacters());

function App() {
  return (
    <Provider store={store}>
      <div>
        <CharacterList />
        <CharacterProfile />
      </div>
      <div>
        <CharacterWorld />
        <CharacterMovies />
      </div>
    </Provider>
  );
}

export default App;
