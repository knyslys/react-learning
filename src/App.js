import React, { useState } from "react";
import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [];
  const [expensesItems, addExpense] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
    addExpense((oldExpenses) => [newExpense, ...oldExpenses]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expensesItems}></Expenses>
      </header>
    </div>
  );
};

export default App;
