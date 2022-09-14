import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(prop) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={prop.date}></ExpenseDate>
        <h2>{prop.title} </h2>
        <h2 className="expense-item__description h2">{prop.location}</h2>
        <div className="expense-item__price">Rs {prop.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

//Here in <ExpenseDate> we are using date attribute i.e date={prop.date} it has date in it which is in dynamic values
//i.e in items array has object with date, it will store that date
// this attribute will pass as argument to ExpenseDate component function