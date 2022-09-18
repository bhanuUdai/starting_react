import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

// const[enteredTitle,newSetTitle]=useState('')
// const[enteredAmount,newSetAmount]=useState('')
// const[enteredDate,newSetDate]=useState('')

//Here we are basically putting all useState in single object
//object is created in useState, having initial value(e.g : enteredTitle) which is initially empty, similarly with other input values
//userInput will be enteredTitle (i.e old one) and setUserInput will be new one which will be return 

// const[userInput,setUserInput]=useState({
//   enteredTitle:'',
//   enteredAmount:'',
//   enteredDate:''
// })
const[userInput,setUserInput]=useState({
  enteredTitle:'',
  enteredAmount:'',
  enteredDate:''
})

  function newTitle(event)
  {
    // newSetTitle(event.target.value)
    
    setUserInput({
      ...userInput,
      enteredTitle:event.target.value
    })
  }
  
  //Here new value will be set but to retain values of other keys ,here we are using spread operator so that when we will update one key value , other remains unchanged


  function newAmount(event)
  {
    setUserInput({
      ...userInput,
      enteredAmount:event.target.value
    })
  }

  function newDate(event)
  {
    setUserInput({
      ...userInput,
      enteredDate:event.target.value
    })
  }

  return (
    <form>
      <div className="new-expense__controls">

        <div>
          <label htmlFor="expense_title">Expense Title</label>
          <input type="text" id="expense_title" onChange={newTitle}></input>
        </div>

        <div className="new-expense__controls">
          <label htmlFor="expense_amount">Expense Amount</label>
          <input type="number" id="expense_amount" onChange={newAmount}></input>
        </div>

        <div className="new-expense__controls">
          <label htmlFor="expense_date">Date</label>
          <input
            type="date"
            id="expense_date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={newDate}
          ></input>
        </div>

        <div className="new-expense__actions">
          <button>Submit</button>
        </div>

      </div>
    </form>
  );
}

export default ExpenseForm;



// in line 6 we are using vanilla js, basically plain js
//in js we do like, document.getElementById().addEventListener('onclick', (event)=>{})
//or
//document.getElementById().addEventListener("onClick",_click)
// function _click(event)
// {
          // statements
// }
// to create events

//here we are doing same things in
// function newInput(event)
//   {
//     console.log(event.target.value)
//   }

//function newInput is on input type text field and here we are targetting its value here
//i.e event.target.value

// onChange event will fire when you change something 

// Here we can use multiple useStates()
// Note that event will always return string, if it is number as in amount , the number will be in string
// therefor using ' ' usestate('')
// imitially it will be empty because form will be empty