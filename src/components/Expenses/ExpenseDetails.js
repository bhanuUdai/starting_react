import React from 'react'
import "./ExpenseItem.css";
let ExpenseDetails=(prop)=> {
  return (
    <div>
      <div className="expense-item__price">Rs {prop.price}</div>
    </div>
  );
}

export default ExpenseDetails;
