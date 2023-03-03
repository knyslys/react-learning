import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {newExpense === true ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          cancelNewExpense={() => setNewExpense(false)}
        />
      ) : (
        <button
          type="submit"
          className="btn"
          onClick={() => setNewExpense(true)}
        >
          Add new expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
