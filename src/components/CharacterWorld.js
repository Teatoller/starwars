import React from "react";
import { connect } from "react-redux";
import './Style.css';


const isKnown = text => text && text !== "unknown";

class CharacterWorld extends React.Component {
  render() {
    const { world } = this.props;
    return (
      <div className="character-world" >
        <h1>World</h1>
        {isKnown(world.name) && <p>Name: {world.name}</p>}
        {isKnown(world.population) && <p>Population: {world.population}</p>}
        {isKnown(world.diameter) && <p>Diameter: {world.diameter}km</p>}
        {isKnown(world.rotation_period) && (
          <p>Day length: {world.rotation_period} hours</p>
        )}
        {isKnown(world.orbital_period) && (
          <p>Year length: {world.orbital_period} days</p>
        )}
        {isKnown(world.climate) && <p>Climate: {world.climate}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    world: state.characterWorldReducer
  };
};

export default connect(mapStateToProps)(CharacterWorld);
