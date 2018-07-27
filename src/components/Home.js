import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Planets</li>
          <li>Spaceships</li>
          <li>Vehicles</li>
          <li>People</li>
          <li>Films</li>
          <li>Species</li>
        </ul>
      </div>
    );
  }
}

//Home.propTypes = {};

export default Home;
