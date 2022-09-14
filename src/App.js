import ExpenseItem from "./components/ExpenseItem.js";

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
  return (
    <div>
      <h2>Expense Tracker</h2>
      {items.map((key) => {
        return (
          <ExpenseItem
            date={key.date}
            title={key.title}
            location={key.location}
            price={key.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;


//.map() is the most effective way to loop for components
//loop should be in { } because it is a js function
//map() is returning <ExpenseItem> and in <ExpenseItem> we are passing attributes
//example:  date==key,  {key.date}==value
// key name should be same in JSX text content in ExpenseItem.js file
//https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react
//read this article for more
// hl
