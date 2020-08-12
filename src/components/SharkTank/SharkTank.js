import React from 'react';
import PropTypes from 'prop-types';
import studentsShape from '../../helpers/props/studentsShape';
import LiveStudent from '../LiveStudent/LiveStudent';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentsShape.studentsShape),
    killAStudent: PropTypes.func,
  }

  killStudentEvent = (e) => {
    e.preventDefault();
    const { livingStudents, killAStudent } = this.props;
    const randomNumber = Math.floor(Math.random() * Math.floor(5));
    console.error(randomNumber);

    livingStudents.forEach((student) => {
      if (student.id === `student${randomNumber}`) {
        killAStudent(student.id);
      }
    });
  }

  render() {
    const { livingStudents } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));

    return (
      <div className="sharkTank container display-flex flex-wrap justify-content-center">
        <h2 className="mt-2">Shark Tank!</h2>
        <div className="row justify-content-center">
          { livingStudentCards }
        </div>
        <button className="btn btn-danger mb-4 mt-4" onClick={this.killStudentEvent}>SHARK ATTACK</button>
      </div>
    );
  }
}

export default SharkTank;
