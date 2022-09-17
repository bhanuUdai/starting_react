import React from 'react'

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate";
let ExpenseItem = (prop) => {
  let updateTitle = prop.title;

  const clickHandler = () => {
    updateTitle = "drinks";
    console.log(updateTitle)
  };
  const deleteHandeler = () => {
    console.log("deleted");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={prop.date} />
        <h2>{updateTitle} </h2>
        <h2>{prop.location}</h2>
        <ExpenseDetails price={prop.price} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandeler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;

//Here in <ExpenseDate> we are using date attribute i.e date={prop.date} it has date in it which is in dynamic values
//i.e in items array has object with date, it will store that date
// this attribute will pass as argument to ExpenseDate component function

//In react events are passed as "prop" , but "on" should be used before events name, then only react will take it as event (e.g  onClick)
//here functions that we will passed in events should not be evoked i.e '( )' should not used, other wise they will evoked when page will loaded
