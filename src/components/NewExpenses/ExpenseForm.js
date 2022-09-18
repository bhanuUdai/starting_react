import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
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
    newSetDate(event.target.value);
  }

  function submitHandler(event)
  {
    event.preventDefault()
    let obj={
      enteredTitle,
      enteredAmount,
      enteredDate
    }
    let data=Object.keys(obj)
    data.forEach((key)=>
    {
      if(obj[key])
      {
        console.log(obj[key])
      }
    })
    newSetTitle('')
    newSetAmount('')
    newSetDate('')

    //here we are envoking the useState again with empty input value, which means entered values will become empty
    // these should be envoked inside the submitHandler, which we are using to submit the form
    //here the flow will be like we enter new value, stored in state, we submit form and values get console
    //after that code will reach line 37,38,38 and evoke useState again, it will rerender the component and pass empty values, which will get appear in ui because of "value" keyword we use in each <input>
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label htmlFor="expense_title">Expense Title</label>
          <input type="text" id="expense_title" value={enteredTitle} onChange={newTitle} />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="expense_amount">Expense Amount</label>
          <input type="number" id="expense_amount" value={enteredAmount} onChange={newAmount} />
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