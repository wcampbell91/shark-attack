import React from 'react';
import studentsShape from '../../helpers/props/studentsShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentsShape.studentsShape,
  };

  render() {
    const { student } = this.props;
    return (
      <div className="card graveStone bg-secondary text-light border-0 m-2 col-4">
        <div className="card-body">
          <h3 className="card-text text-dark">Here Lies </h3>
          <h5 className="card-text mt-2">{ student.firstName } { student.lastName }</h5>
        </div>
      </div>
    );
  }
}

export default GraveStone;
