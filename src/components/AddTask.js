import React, { useState } from "react";
import classes from "./AddTask.module.css";
const AddTask = (props) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleDate = (e) => {
    e.preventDefault(0);
    setDate(e.target.value);
  };
  const handleText = (e) => {
    setValue(e.target.value);
  };
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };
  const handleClick = () => {
    if (value.length > 2) {
      const add = props.add(value, date, checked);

      if (add) {
        setValue("");
        setChecked(false);
        setDate(minDate);
      }
    } else {
      alert("Za krótka nazwa!");
    }
  };

  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";
  const style = checked ? classes.important : null;
  return (
    <div className={classes.form}>
      <input
        type="text"
        placeholder="Dodaj zadanie"
        value={value}
        onChange={handleText}
      />
      <input
        type="checkbox"
        checked={checked}
        id="important"
        onChange={handleCheckbox}
      />
      <label htmlFor="important" className={style}>
        Priorytet
      </label>
      <br />
      <label htmlFor="date">Zrobić do </label>
      <input
        type="date"
        id="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleDate}
        onKeyPress={(e) => e.preventDefault()}
      />
      <button onClick={handleClick}>Dodaj</button>
      <hr />
    </div>
  );
};

export default AddTask;
