import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate";

let ExpenseItem = (prop) => {
  const [title, setTitle] = useState(prop.title);
  const [oldPrice, newPrice] = useState(prop.price);

  const clickHandler = () => {
    setTitle("updated!!");
    console.log(title);
  };

  const expenseHandeler = () => {
    newPrice(oldPrice + 100);
  };

  return (
    <li>
      <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={prop.date} />
        <h2>{title} </h2>
        <h2>{prop.location}</h2>
        <ExpenseDetails price={oldPrice} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={expenseHandeler}>Change Expense</button>
    </Card>
    </li>
    
  );
};

export default ExpenseItem;

