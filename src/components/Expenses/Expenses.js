import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2023");

  const getFilterDate = (year) => {
    setFilterDate(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterDate;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterDate}
        filterDateSet={getFilterDate}
      ></ExpenseFilter>
      {filteredExpenses.length === 0 ? (
        <h2>No Content</h2>
      ) : (
        renderExpenses(filteredExpenses)
      )}
    </Card>
  );
}

const renderExpenses = (expense) => {
  return expense.map((e) => {
    return (
      <ExpenseItem
        key={Math.random()}
        title={e.title}
        amount={e.amount}
        date={e.date}
      />
    );
  });
};

export default Expenses;
