/* This one doesnot has edit functionality, check another one for that functionality */

import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';


//1.
function App() {
    const [students, setStudents] = useState([
        { id: 1234, name: "s1", age: 12 },
        { id: 12, name: "s2", age: 10 },
        { id: 32, name: "s3", age: 11 },
    ]);
    const [isListHidden, setisListHidden] = useState(false);

    function deleteStudent(id) {
        setStudents(students.filter((s) => s.id !== id));
    }

    function addStudent(student) {
        const newStudents = [...students];
        newStudents.unshift(student);
        setStudents(newStudents);
    }
    return (
        <div className="App">
            {isListHidden ? ("hidden") : (
                <StudentList
                    students={students}
                    deleteStudent={deleteStudent}
                    isListHidden={isListHidden}
                    setisListHidden={setisListHidden}
                />
            )}
            <button onClick={() => setisListHidden(!isListHidden)}>
                show/hide the list
            </button>
            <StudentForm addStudent={addStudent} />
        </div>
    );
}


function StudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    function createStudent() {
        const student = {};
        student.name = name;
        student.age = age;
        student.id = uuidv4();
        addStudent(student);
    }
    return <>
        <h2>Student form</h2>
        <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="age" type="number" value={age} onChange={e => setAge(e.target.value)} />
        <button onClick={createStudent}>Submit</button>
    </>
}


function StudentList({
    students,
    deleteStudent,
}) {
    return (
        <>
            <h2>Student List</h2>
            {students.map((s, index) => (
                <Student key={index} student={s} deleteStudent={deleteStudent} />
            ))}
        </>
    );
}


function Student({ student, deleteStudent }) {
    const { id, name, age } = student;
    function deleteS() {
        // get students from local cache and delete
        deleteStudent(id);
    }
    return (
        <p>
            id: {id}, name: {name}, age: {age}{" "}
            <button onClick={deleteS}>delete</button>
        </p>
    );
}
export default App;