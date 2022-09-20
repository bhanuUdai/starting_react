import React,{useState} from 'react'
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from '../UI/Card.js'
let Expense=(prop)=> {
  // let item = prop.items;

  const[filteredYear,setYear]=useState(2020)
  
  function getFilterYear(newYear)
  {
    setYear(newYear)
  }

  //  console.log(item)
   let filteredExpenses=prop.items.filter((expense)=>
   {
    // console.log(expense.date.getFullYear().toString())
    // console.log(filteredYear.toString())

      return (expense.date.getFullYear().toString()===filteredYear)
      
   })
   
console.log(filteredExpenses)

  return (
    <Card className="expenses">
    <ExpensesFilter fixedYear={filteredYear} year={getFilterYear} ></ExpensesFilter>
      {filteredExpenses.map((data) => {
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