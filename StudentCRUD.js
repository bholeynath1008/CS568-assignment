import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Initial Data
const initialState = [
  { id: '101', name: "Ranjan", age: 20 },
  { id: '102', name: "Bhote", age: 20 },
  { id: '103', name: "Bholey", age: 19 }
];

// To choose form mode edit or add. Edit activates when edit button is clicked.
const FORM_MODE = {
  ADD: "ADD",
  UPDATE: "UPDATE"
};


function App() {
  const [studentList, setStudentList] = useState(initialState); // Student list main data to work in
  const [isHiddenList, setHiddenList] = useState(false); // initially,it is set not hidden
  const [formMode, setFormMode] = useState(FORM_MODE.ADD); // Edit/ update or Add mode(Single form will works for edit and add students)
  const [studentToUpdate, setStudentToUpdate] = useState({ name: "", age: 0 }); // This will get data from specific element when edit button is on click. 

  // handle Delete Button
  function handleDeleteStudent(id) {
    const deleteStudent = studentList.filter(ele => ele.id !== id); // creates new Array
    setStudentList(deleteStudent);
  }

  // Handle Add button when Submit is clicked
  function handleAddStudent(newStudent) {
    console.log(newStudent)
    setStudentList([newStudent].concat([...studentList]));
  }


  // Handle update student after Edit button is clicked
  function handleEdit(student) {
    const copyStudents = [...studentList];
    for (let s of copyStudents) {
      if (s.id === student.id) {
        s.name = student.name;
        s.age = student.age;
        break;
      }
    }
    setStudentList(copyStudents);
    // edition is done so reset to add mode
    setFormMode(FORM_MODE.ADD);
    // clean form
    setStudentToUpdate({ name: "", age: 0 });
  }

  return (
    <div className="App">
      <h1>CRUD Student</h1>
      {isHiddenList ? <h2>Student List Hidden</h2> :
        <div>
          <StudentList onDelete={handleDeleteStudent} list={studentList} setFormMode={setFormMode} setStudentToUpdate={setStudentToUpdate} />
        </div>
      }
      <StudentForm onAdd={handleAddStudent} formMode={formMode} setFormMode={setFormMode} studentList={studentList} handleEdit={handleEdit} studentToUpdate={studentToUpdate} />
      <button onClick={() => setHiddenList(!isHiddenList)}>Show/Hide</button>
    </div>
  )
}

function StudentList({ onDelete, list, setFormMode, setStudentToUpdate }) {

  // handle edit on click
  function handleEditClick(element) {
    setFormMode(FORM_MODE.UPDATE);
    setStudentToUpdate({ ...element }); // use spread operator to update 'studentToUpdate' state all properties from student element.initially it is {name: "", age: 0}
  }

  const students = list.map(element => {
    return <div key={element.id}>
      Student Id is {element.id}, Student Name is {element.name}, Age is {element.age} <></>
      {/* pass argument to handleEditClick the element which is clicked */}
      <button onClick={() => handleEditClick(element)}> 
        edit
      </button>
      <button onClick={() => onDelete(element.id)}>delete</button>
    </div>
  })
  return (
    <div>
      <h2>Student List</h2>
      {/* display elements in screen */}
      <div>{students}</div>
    </div>
  )
}


function StudentForm({ onAdd, formMode, handleEdit, studentToUpdate }) {
  // This will be render first, 'studentToUpdate' state has value {name: "", age: 0} at this time. 
  const [name, setName] = useState(studentToUpdate.name); //{name: ""}
  const [age, setAge] = useState(studentToUpdate.age);


  // this will works for edit student only not for add student
  // the effect function will be called whenever the dependency [studentToUpdate] state changes. It will change when it will get new value after edit button is clicked. It holds value that is retrieves after edit button click. If id:102 edit button is clicked, { id: '102', name: "Bhote", age: 20 } this object is received in 'studentToUpdate' state. Whole object is received but we need name and age to update so we didnot update id here.
  useEffect(() => {
    console.log('in effect');
    setName(studentToUpdate.name); // Bhote (this will be set on above state)
    setAge(studentToUpdate.age); //20 (this will be set on above state)
  }, [studentToUpdate]);


  // Handle submit button on click.
  function handleSubmit() {
    // Both name and age are received from above state, and store in 'student' object.
    const student = { name, age };

    // check form mode is add or edit and do respective operation
    if (formMode === FORM_MODE.ADD) {
      student.id = uuidv4().slice(0, 3);
      onAdd(student);

    } else {
      student.id = studentToUpdate.id; // on update after edit button is clicked, id need to be assign in it, which is stored in 'studentToUpdate' state.
      handleEdit(student);
    }
  }

  return (
    <div>
      {/* Check respective form mode to display add student or update student */}
      {formMode === FORM_MODE.ADD ? <h2>Add Student</h2> : <h2>Update Student</h2>} 

      <div>
        {/* value is important here, it will store the initial value of name and age, it is required for both add and edit to know the pervious value to know react the change occured */}
        {/* value={name} stores bhote while click on edit and it will be diplayed on input field on form */}
        {/* value={age} stores 20 while click on edit and it will be diplayed on input field on form */}
        {/* better to do e => setName(e.target.value) by making differnt function */}

        <label>Student Name<input value={name} type="text" placeholder="name.." onChange={e => setName(e.target.value)}></input></label> 
        <label>Student Age<input value={age} type="number" placeholder="age.." onChange={e => setAge(e.target.value)}></input></label>
        {/* submitting after checking form mode, both form mode has different operation */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App;



//1. Different way of getting input(Ranjan Way)
//2. Mapping
//3. while addnewStudent Callback (Concat) or unshift 
//4. Onchange- {callFunction}
//5. Onclick - {()=>callFunctionHere} // other wise invoke implicitly
//6. try && conditional operator
