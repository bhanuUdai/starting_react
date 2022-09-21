import React, { useState } from "react";
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


  //creating state here for changing isEditing, everytime when user click on "Enter Expenses" button

  let [isEditing, setIsEditing] = useState(false);

  function editingHandler() {
    setIsEditing(true);
  }

  function cancelButtonHandler() {
    setIsEditing(false);
  }

  // here below Enter Expenses button wil be shown if isEditing is false, and Form will be shown if it is true

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={editingHandler}>
          Enter Expenses
        </button>
      )}

      
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}              //here passing cancelButtonHandler function for cancel button in ExpenseForm, it will change isEditing to false again and "ExpenseForm" will close
        />
      )}
    </div>
  );
}

export default NewExpenses;

//Here we create onSaveExpenseData attribute in <ExpenseForm> component which will pass as prop to its child(ExpenseForm.js) and heve a saveExpenseDataHandler function in it
//onSaveExpenseData function in line 6 is containing a new object "expenseData" which will contain data that will be passed into the function and a new id of random number
// this function will evoked in Exppenseform.js which is its child, then it will executed here and "enteredExpenseData" will also passed in ExpenseForm.js component
