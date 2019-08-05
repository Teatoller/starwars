import React from "react";
import { connect } from "react-redux";

class CharacterProfile extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h1>Profile</h1>
        {profile.name && <p>Name: {profile.name}</p>}
        {profile.height && <p>Height: {profile.height}cm</p>}
        {profile.mass && <p>Weight: {profile.mass}kg</p>}
        {profile.gender && <p>Gender: {profile.gender}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.characterProfileReducer
  };
};

export default connect(mapStateToProps)(CharacterProfile);
