import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(prop) {
  if (prop.data.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expense Found Of this Year!
      </h2>
    );
  } else if (prop.data.length === 1) {
    return (
      <h2 className="expenses-list__fallback">
        Only single Expense here. Please add more...
      </h2>
    );
  }

  return prop.data.map((data) => {
    console.log(data.id)
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={data.id}
          date={data.date}
          title={data.title}
          location={data.location}
          price={data.amount}
        ></ExpenseItem>
      </ul>
    );
  });
}

export default ExpensesList;

//here we are creating seprate component for printing the filtered expense lists
//now we enclose expense lists inside <ul> and in "ExpenseItem" copmonent , we enclose ExpenseItem inside <li>
// in Expense.js "filteredExpenses" will be passed inside ExpenseList component
//Here also returning directly without using any variable
