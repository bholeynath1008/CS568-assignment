/* Ranjan bro code is in follows professional way, follow some profesional way like using && operators, name:"name" in input field, spread operators, destructures and others. This doesnot contains useRef method. */

import React, { useState, useTransition } from "react";

const initialState = [
  { studentId: 101, name: "Ranjan", age: 20 },
  { studentId: 102, name: "Bhote", age: 20 },
  { studentId: 103, name: "Bholey", age: 19 }
];


function App() {
  const [students, setStudents] = useState(initialState);
  const [studentIdCounter, setStudentIdCounter] = useState(1);
  const [studentToUpdate, setStudentToUpdate] = useState(null);

  function handleDelete(id) {
    const newStudents = students.filter(student => student.studentId !== id); // Filter will return new array so no need to copy it
    setStudents(newStudents);
  }

  function handleUpdateClick(id) {
    const student = students.find(student => student.studentId === id);
    if (student === null) return;
    console.log(student)
    setStudentToUpdate({...student});

  }

  function handleAddStudent(newStudent) {

    newStudent = { studentId: studentIdCounter, ...newStudent }
    setStudents([newStudent].concat(students));
    setStudentIdCounter(studentIdCounter + 1);
  }

  function handleUpdateStudent(newStudentData) {
    const udpatedStudent = {
      studentId: studentToUpdate.studentId,
      ...newStudentData
    };
    const studentIndex = students.findIndex(student => student.studentId === udpatedStudent.studentId);
    const newStudents = [
      ...students.slice(0, studentIndex),
      {...udpatedStudent},
      ...students.slice(studentIndex + 1)
    ];
    setStudents(newStudents);
    setStudentToUpdate(null);
  }
const isUpdateMode = studentToUpdate !== null;

  return (
    <div className="App">
      <StudentList list={students} onDelete={handleDelete} onUpdateClick= {handleUpdateClick}/>
      <NewStudentForm onAddStudent={handleAddStudent} />
      {isUpdateMode && (
        <UpdateStudentForm
         initialStudentState={{
          name: studentToUpdate.name,
          age: studentToUpdate.age
        }}
        onUpdateStudent={handleUpdateStudent}
          />
      )}

    </div>
  )
}

function StudentList({ list, onDelete, onUpdateClick }) {
  let students = list.map(element => {
    return (
      <li key={element.studentId}>
        Student id ; {element.studentId}
        name: {element.name}
        age: {element.age}
        <button onClick={() => onDelete(element.studentId)}>Delete</button>
        <button onClick={() => onUpdateClick(element.studentId)}>Update</button>
      </li>
    )
  });

  return (
    <div>
      <h2>Student List</h2>
      <ul>{students}</ul>
    </div>
  )
}
const initialStudentState = { name: "", age: 0 }


function NewStudentForm({ onAddStudent }) {

  const [student, setStudent] = useState(initialStudentState);
  function handleFormChange(event) {
    const { name, value } = event.target;
    const newStudent = {
      ...student,
      [name]: value
    }
    setStudent(newStudent);
  }

  function handleSubmit() {
    onAddStudent({ ...student, age: parseInt(student.age) });
    setStudent(initialStudentState);

  }
  return (
    <div>
      <h2>Add form</h2>
      <label>Name<input value={student.name} name="name" type="text" placeholder="name.." onChange={handleFormChange}></input></label>
      <label>Age<input value={student.age} name="age" type="number" placeholder="age.." onChange={handleFormChange}></input></label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

function UpdateStudentForm({ onUpdateStudent, initialStudentState }) {


  const [student, setStudent] = useState(initialStudentState);
  function handleFormChange(event) {
    const { name, value } = event.target;
    const newStudent = {
      ...student,
      [name]: value
    }
    setStudent(newStudent);
  }

  function handleSubmit() {
    onUpdateStudent({ ...student, age: parseInt(student.age) });

  }
  return (
    <div>
      <h2>Update form</h2>
      <label>Name<input value={student.name} name="name" type="text" placeholder="name.." onChange={handleFormChange}></input></label>
      <label>Age<input value={student.age} name="age" type="number" placeholder="age.." onChange={handleFormChange}></input></label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


export default App;
