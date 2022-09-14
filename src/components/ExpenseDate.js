import './ExpenseDate.css'

let ExpenseDate = function (prop) {
  let month = prop.date.toLocaleString("en-US", { month: "long" });
  let day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  let year = prop.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;


// here prop store date as an object
//prop={date: new Date(2022, 0, 3)}
//therefor we are using prop.date
//actually previously all arguments passed as object to prop
//prop store objects
// hloo