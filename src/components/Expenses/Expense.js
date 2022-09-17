import React from 'react'
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from '../UI/Card.js'
let Expense=(prop)=> {
  let item = prop.items;
  return (
    <Card className="expenses">
      {item.map((key) => {
        return (
          <ExpenseItem
            date={key.date}
            title={key.title}
            location={key.location}
            price={key.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expense;
