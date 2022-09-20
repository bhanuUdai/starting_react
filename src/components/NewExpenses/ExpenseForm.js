import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(prop) {
  const [enteredTitle, newSetTitle] = useState("");
  const [enteredAmount, newSetAmount] = useState("");
  const [enteredDate, newSetDate] = useState("");

  function newTitle(event) {
    newSetTitle(event.target.value);
  }

  function newAmount(event) {
    newSetAmount(event.target.value);
  }

  function newDate(event) {
    let [year, month, day] = event.target.value.split("-");

    // console.log("date")
    // console.log(year,month,day)
    newSetDate(new Date(year, month - 1, day));
  }
  
  // console.log(enteredDate)
  //here after getting date from input, we are extracting year, month and day to agin put in new Date() function which will now give date in (like: 2022,sep,19 timezome) kind of format
  function submitHandler(event) {
    event.preventDefault();
    let obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log(enteredDate)
    // let data=Object.keys(obj)
    // data.forEach((key)=>
    // {
    //   if(obj[key])
    //   {
    //     console.log(obj[key])
    //   }
    // })
    prop.onSaveExpenseData(obj);
    newSetTitle("");
    newSetAmount("");
    newSetDate('');

    //here in line 37 we are evoking the the function in "onSaveExpenseData" in its parent and passing "obj" as parameter
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label htmlFor="expense_title">Expense Title</label>
          <input
            type="text"
            id="expense_title"
            value={enteredTitle}
            onChange={newTitle}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="expense_amount">Expense Amount</label>
          <input
            type="number"
            id="expense_amount"
            value={enteredAmount}
            onChange={newAmount}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="expense_date">Date</label>
          <input
            type="date"
            id="expense_date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={newDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

// NOTE:
// In <form> tag if you use button and add event click on it, it will set request to server and reload the page, this happens only in case of <form> and not other tag
// therefor we use event.preventDefault() to prevent it from submit
