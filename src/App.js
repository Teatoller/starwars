import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './App.css';
import { getCharacters } from './redux/actions/characterActions';
import CharacterList from './components/CharacterList';


store.dispatch(getCharacters());

function App() {
  return (
    <Provider store={store} >
      <div className="App">
      <CharacterList />
    </div>
    </Provider>
    
  );
}

export default App;
