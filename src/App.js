import Expense from "./components/Expenses/Expense.js"
import NewExpenses from "./components/NewExpenses/NewExpense.js"
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

const addExpensesHandler=(expense)=>
{
  console.log(expense)
}

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpenses addExpenses={addExpensesHandler}/>
      <Expense items={items}></Expense>
    </div>
  );
}

export default App;

//here we create addExpenses attribute, having "addExpensesHandler" function in it, This function will evoked in NewExpense.js, that is its child component
