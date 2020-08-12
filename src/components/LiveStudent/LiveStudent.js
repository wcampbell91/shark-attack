import React from 'react';
import studentsShape from '../../helpers/props/studentsShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentsShape.studentsShape,
  };

  render() {
    const { student } = this.props;
    return (
    <div className="card bg-dark text-light border-0 m-2 col-4">
      <div className="card-body">
        <h5 className="card-text">{ student.firstName } { student.lastName }</h5>
      </div>
    </div>
    );
  }
}

export default LiveStudent;
