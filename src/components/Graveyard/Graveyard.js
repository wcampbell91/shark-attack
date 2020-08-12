import React from 'react';
import PropTypes from 'prop-types';
import studentsShape from '../../helpers/props/studentsShape';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentsShape.studentsShape),
  }

  render() {
    return (
      <div>
        <h2>Graveyard</h2>
      </div>
    );
  }
}

export default Graveyard;
