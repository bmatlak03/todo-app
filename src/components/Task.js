import React from "react";

const Task = ({ task, deleteTask, change }) => {
  const { text, date, id, active, important, finishDate } = task;
  const style = {
    color: "red",
  };
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> do{" "}
          <span>{date} </span>
          <button onClick={() => change(id)}>Zostało zrobione</button>
          <button onClick={() => deleteTask(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finishedTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong>{" "}
          <em>
            (zrobić do <span>{date}</span>)
          </em>
          <br />
          -potwierdzenie wykonania <b>{finishedTime}</b>
          <button onClick={() => deleteTask(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
