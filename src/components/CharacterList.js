import React, { Component} from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
    render() {
        const { characters } = this.props;
        return (
            <div >
        <h1>Characters</h1>
        <ul>
          {characters.map(c =>
            <li
              key={c.name}
            >
              {c.name}
            </li>
          )}
        </ul>
      </div>
        )
    }
   
}
  

const mapStateToProps = (state) => {
    return {
        characters: state.characterReducer
    }
}

export default connect(mapStateToProps)(CharacterList);
