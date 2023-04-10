import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: '101', task: "Sleep" },
  { id: '102', task: "Eat" },
  { id: '103', task: "Bholey" }
];


function App() {
  const [list, setList] = useState(initialState);
  const [prevForm, setForm] = useState("add");
  const [taskToUpdate, setTaskToUpdate] = useState({ task: "" });

  // console.log(taskToUpdate);

  function deleteList(id) {
    setList(list.filter(e => e.id !== id));
  }

  function handleAddList(newTaskObject) {
    const copyList = [...list];
    copyList.unshift(newTaskObject);
    setList(copyList);
    setTaskToUpdate({ task: "" });

  }

  function updateTask(task) {
    const copyList = [...list];
    for (const ele of copyList) {
      if (ele.id === task.id) {
        ele.task = task.task;
        break;
      }
    }
    setList(copyList);
    setForm("add");
    setTaskToUpdate({ task: "" });
  }

  const boxStyles = {
    margin: 'auto',
    width: '15%',
    border: '3px solid green',
    padding: '10px',
    backgroundColor: "lightblue",
    color: "grey",
  };

  return (
    <div className="App" style={boxStyles}>
      <ToDoList list={list} deleteList={deleteList} handleAddList={handleAddList} setForm={setForm} setTaskToUpdate={setTaskToUpdate} updateTask={updateTask} prevForm={prevForm} taskToUpdate={taskToUpdate} />
    </div>
  )
}


// ToDoList
function ToDoList({ list, deleteList, handleAddList, setForm, setTaskToUpdate, prevForm, updateTask, taskToUpdate }) {
  return (
    <div>
      <h2>To Do App</h2>
      <AddToList handleAddList={handleAddList} prevForm={prevForm} updateTask={updateTask} taskToUpdate={taskToUpdate} />
      <ToDoItem list={list} deleteList={deleteList} setForm={setForm} setTaskToUpdate={setTaskToUpdate} />
    </div>
  )
}


// ToDoItem
function ToDoItem({ list, deleteList, setForm, setTaskToUpdate }) {

  function handleEditClick(element) {
    setTaskToUpdate({ ...element });
    setForm("update");

  }
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  };

  const listInTable = list.map(ele => {
    return (<tr key={ele.id}>
      <td>{ele.id}</td> <td>{ele.task}</td>
      <td>
        <button style={buttonStyle} onClick={() => handleEditClick(ele)}>Edit</button>
      </td>
      <td>
        <button style={buttonStyle} onClick={() => deleteList(ele.id)}>Delete</button>
      </td>
    </tr>
    )
  })

  const tableStyle = {
    backgroundColor: 'blue',
    fontStyle: 'thomas',
    color: 'white',
  };


  return (
    <div>
      <h2>To Do Task</h2>
      <table>
        <thead >
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody style={tableStyle}>
          {listInTable}
        </tbody>
      </table>
    </div>
  )
}

function AddToList({ handleAddList, prevForm, updateTask, setForm, taskToUpdate }) {

  const [task, setTask] = useState(taskToUpdate.task);
  useEffect(() => {
    setTask(taskToUpdate.task);
  }, [taskToUpdate]);


  const newTask = {};
  newTask.id = uuidv4().slice(0, 3);
  newTask.task = task;

  function updatetask(event) {
    const task = event.target.value;
    setTask(task);
  }

  function handleSubmitOnClick() {
    const newTask = { task };
    if (prevForm === "add") {
      newTask.id = uuidv4().slice(0, 3);
      /* newTask.task = task; */
      console.log(newTask);
      handleAddList(newTask);
    } else {
      newTask.id = taskToUpdate.id;
      updateTask(newTask);
    }
  }

  return (

    <div>
      <h2>{prevForm === "add" ? "Add Task to List" : "updateTask"}</h2>
      <label><input type="text" value={task} placeholder="Add your list here" onChange={updatetask}></input>
        <button onClick={() => handleSubmitOnClick()}>Submit</button></label>
    </div>
  )
}
export default App;



//1. Different way of getting input(Ranjan Way)
//2. Mapping
//3. while addnewStudent Callback (Concat)
//4. Onchange- {callFunction}
//5. Onclick - {()=>callFunctionHere} // other wise invoke implicitly
//6. try && conditional operator
