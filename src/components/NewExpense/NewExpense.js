import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);
        props.onAddExpense(expenseData)

    }
  return (
    <div className="new-expense">
        {/* with onSaveExpenseData event handler we are getting data from ExpenseForm. and we are calling it in  ExpenseForm by props*/}
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}> </ExpenseForm>
    </div>
  );
};

export default NewExpense;
