import'C:/Users/90533/my-app/src/components/ExpenseItem.css';
function ExpenseItem ({title, amount, date}){
    
    return (
        <div className="expense-item">
            <div>{date}</div>
               <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;