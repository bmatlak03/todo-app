import React, { useState } from "react";
import classes from "./App.module.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const deleteTask = (id) => {
    let tasksCopy = [...tasks];
    tasksCopy = tasksCopy.filter((task) => task.id !== id);
    setTasks(tasksCopy);
  };
  const changeTaskStatus = (id) => {
    console.log("change status w " + id);
    const tasksCopy = [...tasks];
    tasksCopy.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(tasksCopy);
  };
  const addTask = (text, date, important) => {
    const task = {
      id,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    setId(id + 1);
    setTasks([...tasks, task]);
    return true;
  };

  return (
    <div className={classes.App}>
      <AddTask add={addTask} />
      <TaskList tasks={tasks} delTask={deleteTask} change={changeTaskStatus} />
    </div>
  );
};

export default App;
