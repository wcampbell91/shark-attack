import React from 'react';
import PropTypes from 'prop-types';
import studentsShape from '../../helpers/props/studentsShape';
import GraveStone from '../GraveStone/GraveStone';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentsShape.studentsShape),
  }

  render() {
    const { deadStudents } = this.props;

    const deadStudentCards = deadStudents.map((student) => (
      <GraveStone key={student.id} student={student}/>
    ));
    return (
      <div className="graveyard container display-flex flex-wrap justify-content-center text-light">
        <h2 className="mt-2">Graveyard</h2>
        <div className="row justify-content-center">
        { deadStudentCards }
        </div>
      </div>
    );
  }
}

export default Graveyard;
