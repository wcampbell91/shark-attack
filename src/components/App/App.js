import React from 'react';
import studentsData from '../../helpers/data/studentsData';
import SharkTank from '../SharkTank/SharkTank';
import Graveyard from '../Graveyard/Graveyard';

import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    // set value of liveStudents / deadStudents with helper functions
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    // set state of liveStudents / deadStudents
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <SharkTank livingStudents={livingStudents} />
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
