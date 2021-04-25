import React from "react";
import Task from "./Task";
const TaskList = ({ tasks, delTask, change }) => {
  const active = tasks.filter((task) => task.active);
  const done = tasks.filter((task) => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} deleteTask={delTask} change={change} />
  ));

  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} deleteTask={delTask} change={change} />
  ));
  const activeTasksMessage =
    activeTasks.length > 0 ? activeTasks : <p>Nie masz żadnych zadań!</p>;
  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {activeTasksMessage}
        <hr />
      </div>
      <div className="done">
        <h4>
          Zadania zrobione <strong>({done.length})</strong>
        </h4>
        {done.length >= 5 && (
          <strong>Wyświetlonych jest 5 ostatnich zadań</strong>
        )}
        {doneTasks.slice(0, 5)}
        <hr />
      </div>
    </>
  );
};

export default TaskList;
