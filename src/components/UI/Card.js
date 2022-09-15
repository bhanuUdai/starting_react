import './Card.css'

let Card=(prop)=>
{
    let classes='card '+prop.className
    return(
        <div className={classes}>{prop.children}</div>
    )
}

export default Card;




// Composition is basically components inside component

// Now to encapsulate compoenets inside a component(e.g <card>)
// If we want to render whole components inside this component (i.e act as a shell)
// we will use "prop.children"  (.children)
// This function will takes all components inside <card> as children and these component will render inside it
// If we dont use prop.children , nothing will happen because all JSX elements can encapsulate inside JSX element 


// In Expense.js code we have "className="expense-item" " class inside <card> element
// but className is attribute of JSX element and not component element
// To make it work it inside Component element, we take classes variable in first code and pass "card " which is class we imported from   Card.css , +prop.className
// (i.e  let classes='card '+prop.className) and pass this variable in <div> className attribute, now className in second code will work