import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterDateHandler = (event) => {
    props.filterDateSet(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <span>Filter</span>
      <select onChange={filterDateHandler} value={props.selected}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
