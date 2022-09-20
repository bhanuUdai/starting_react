import React,{useState} from 'react'
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from '../UI/Card.js'
let Expense=(prop)=> {
  let item = prop.items;

  const[defaultYear,setYear]=useState(2020)
  
  function getFilterYear(newYear)
  {
    setYear(newYear)
  }

   console.log(defaultYear)

  return (
    <Card className="expenses">
    <ExpensesFilter fixedYear={defaultYear} year={getFilterYear} ></ExpensesFilter>
      {item.map((data) => {
        return (
          <ExpenseItem
          key={data.id}
            date={data.date}
            title={data.title}
            location={data.location}
            price={data.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expense;



//JUST CHECKING