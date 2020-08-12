import React from 'react';
import PropTypes from 'prop-types';
import studentsShape from '../../helpers/props/studentsShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentsShape.studentsShape),
  }

  render() {
    const { livingStudents } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));

    return (
      <div>
        <h2>Shark Tank!</h2>
        { livingStudentCards }
        <button className="btn btn-danger">SHARK ATTACK</button>
      </div>
    );
  }
}

export default SharkTank;
