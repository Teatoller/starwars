import React, { Component } from "react";
import { connect } from "react-redux";
import setCurrentCharacter from "../redux/actions/characterIdActions";
import { getCharacterProfile } from "../redux/actions/characterProfileActions";
import './Style.css';

class CharacterList extends Component {
  render() {
    const { characters, setCharacter } = this.props;
    return (
      <div className="character-name" >
        <h1>Characters</h1>
        <ul>
          {characters.map((c, i) => (
            <li onClick={setCharacter(i + 1)} key={c.name}>
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characterReducer
  };
};

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    };
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
