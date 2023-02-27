import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./Expenses.css";

const renderExpenses = (expense) => {
  console.log(expense);
  return expense.map((e) => {
    return <ExpenseItem title={e.title} amount={e.amount} date={e.date} />;
  });
};

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2023");

  const getFilterDate = (year) => {
    setFilterDate(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterDate}
        filterDateSet={getFilterDate}
      ></ExpenseFilter>
      {renderExpenses(props.items)}
    </Card>
  );
}

export default Expenses;
