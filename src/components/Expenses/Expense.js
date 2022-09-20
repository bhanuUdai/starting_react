import React, { useState } from "react";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card.js";
let Expense = (prop) => {
  const [filteredYear, setYear] = useState(2020);

  function getFilterYear(newYear) {
    setYear(newYear);
  }


  
  let filteredExpenses = prop.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // console.log(filteredExpenses);

  let expenseContent=<p>No Expense Available</p>
  if(filteredExpenses.length===1)
  {
    expenseContent= <p>Only single Expense here. Please add more...</p>
  }
  else if(filteredExpenses.length>0)
  {
    expenseContent=filteredExpenses.map((data) => {
      return (
        <ExpenseItem
          key={data.id}
          date={data.date}
          title={data.title}
          location={data.location}
          price={data.amount}
        ></ExpenseItem>
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        fixedYear={filteredYear}
        year={getFilterYear}
      ></ExpensesFilter>

    {expenseContent}

      {/* {filteredExpenses.length===0 && <p>No Expense Available</p> }
      {filteredExpenses.length>0 && filteredExpenses.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            location={data.location}
            price={data.amount}
          ></ExpenseItem>
        );
      })} */}

      {/* {filteredExpenses.length===0?<p>No Expense Available</p>:  filteredExpenses.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            location={data.location}
            price={data.amount}
          ></ExpenseItem>
        );
      })} */}
      
    </Card>
  );
};

export default Expense;

//Condition rendering:
//from line-> 59 to 69, we are using ternary operator simply, if length=0, paragrah will print otherwise map() will executed

// From line --> 46 to 57 we are using "Absuing" here if condition before "&&" will satisfied, then data after "&&" will executed

//From line--> 21 to 39, we are using simple if statement of JS, by using this, return of function become clean
