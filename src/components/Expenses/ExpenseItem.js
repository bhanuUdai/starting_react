import React,{useState} from 'react'

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate";

let ExpenseItem = (prop) => {
 
  const[title,setTitle]=useState(prop.title)

  const clickHandler = () => {
    setTitle('updated!!')
    console.log(title)
  };
  const deleteHandeler = () => {
    console.log("deleted");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={prop.date} />
        <h2>{title} </h2>
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


//for any dynamic change in react we need state function from react library
//This state function is imported and should we write as "useState", 'use' should be used in front of state
//this useState is only used inside component function and not outside or in nested component function
//useState return array of two values, first index have to change , and second index changed value
//therefor we take array to to refrence those values (i.e )  const[title,setTitle]
//In clickHandler function we se setTitle('input'), having new input value
//here we are calling useState(), this will change initial value of title to updated
// and it reload whole component and all jsx code inside it to make it visible on screen

//console.log(title): will show old value because useSate(), schedule function and will appear after some time