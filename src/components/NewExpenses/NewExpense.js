import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(prop) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    prop.addExpenses(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;

//Here we create onSaveExpenseData attribute in <ExpenseForm> component which will pass as prop to its child(ExpenseForm.js) and heve a saveExpenseDataHandler function in it
//onSaveExpenseData function in line 6 is containing a new object "expenseData" which will contain data that will be passed into the function and a new id of random number
// this function will evoked in Exppenseform.js which is its child, then it will executed here and "enteredExpenseData" will also passed in ExpenseForm.js component
