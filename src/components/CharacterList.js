import React, { Component } from "react";
import { connect } from "react-redux";
import setCurrentCharacter from "../redux/actions/characterIdActions";

class CharacterList extends Component {
  render() {
    const { characters, setCharacter } = this.props;
    return (
      <div>
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
    };
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
