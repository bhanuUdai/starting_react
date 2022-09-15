import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(prop) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={prop.date}/>
        <h2>{prop.title} </h2>
        <h2>{prop.location}</h2>
        <ExpenseDetails  price={prop.price} />
      </div>
    </Card>
  );
}

export default ExpenseItem;

//Here in <ExpenseDate> we are using date attribute i.e date={prop.date} it has date in it which is in dynamic values
//i.e in items array has object with date, it will store that date
// this attribute will pass as argument to ExpenseDate component function