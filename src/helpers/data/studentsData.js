const students = [
  {
    id: 'student1',
    firstName: 'Billy',
    lastName: 'Campbell',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Pete',
    lastName: 'Stewart',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Jim',
    lastName: 'Browning',
    isDead: true,
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
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  return deadStudents;
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};
export default { livingStudents, dearlyBeloved, followTheLight };
