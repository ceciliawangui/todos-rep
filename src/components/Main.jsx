import React, { useState } from "react";
import "../components/Main.css";

function Main() {
    const [tasks, setTasks] = useState([
      { id: 1, title: "clean today", description: "do the cleaning today", status: "pending" },
      { id: 2, title: "cook", description: "cook the meal today", status: "pending" },
      { id: 3, title: "study", description: "study for the exams", status: "pending" }
    ]);
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
  
    const editTask = (taskId) => {
      // code to edit task
    };
  
    const addTask = () => {
      const newTask = {
        id: tasks.length + 1,
        title: "New Task",
        description: "New Task Description",
        status: "pending"
      };
      setTasks([...tasks, newTask]);
    };
  
    return (
      <div className="todocontainer">
        <div className="header">
          <div className="welcome">Welcome back!</div>
          <div className="createbtn" onClick={addTask}>Add</div>
        </div>
        <div className="todolist">
          {tasks.map((task) => (
            <div className="todo" key={task.id}>
              <div className="check">
                <input type="checkbox" name="" id="checkbtn" />
              </div>
              <div className="deletebtn">
                <button onClick={() => deleteTask(task.id)}>delete</button>
              </div>
              <div className="editbtn">
                <button onClick={() => editTask(task.id)}>edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Main;