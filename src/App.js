import React, { useState } from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpenses from "./components/NewExpenses/NewExpense.js";
let items = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 100,
    date: new Date(2022, 0, 1),
    location: "Shimla",
  },
  {
    id: 2,
    title: "Petrol",
    amount: 500,
    date: new Date(2022, 0, 2),
    location: "Una",
  },
  {
    id: 3,
    title: "Diesel",
    amount: 400,
    date: new Date(2022, 0, 3),
    location: "Kullu",
  },
  {
    id: 4,
    title: "LPG",
    amount: 1000,
    date: new Date(2022, 0, 4),
    location: "Mandi",
  },
];

function App() {
  const [oldItems, newItem] = useState(items);

  const addExpensesHandler = (expense) => {
    // let data=items.push(expense)
    console.log(expense);
    newItem([...oldItems, expense]);
  };
  console.log(items);
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpenses addExpenses={addExpensesHandler} />
      <Expense items={oldItems}></Expense>
    </div>
  );
}

export default App;

//here we create addExpenses attribute, having "addExpensesHandler" function in it, This function will evoked in NewExpense.js, that is its child component
//Now finally the data from from is now avalable in this App component, which will be carried  by "addExpensesHandler" function from child component
// Now we have to show it on user interface, for this we create a "state" in 38, here for printing values on ui be have to push new values contained in object inside items array, for this we are using spread operator in line 44, if we do push then only pushed value will be assign and ultimately error will be form.
