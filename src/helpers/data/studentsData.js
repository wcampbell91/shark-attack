const students = [
  {
    id: '0',
    firstName: 'Billy',
    lastName: 'Campbell',
    isDead: false,
  },
  {
    id: '1',
    firstName: 'Pete',
    lastName: 'Stewart',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Jim',
    lastName: 'Browning',
    isDead: false,
  },
];

const livingStudents = () => {
  const liveStudents = [];

  students.forEach((student) => {
    if (student.isDead === false) {
      liveStudents.push(student);
    }
  });
  return liveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = [];

  students.forEach((student) => {
    if (students.isDead === true) {
      deadStudents.push(student);
    }
  });
  return deadStudents;
};

const followTheLight = (studentId) => {


}
export default { livingStudents, dearlyBeloved, followTheLight };
