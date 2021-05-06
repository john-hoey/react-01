import { useState } from "react";
import ExpensesYearFilter from "./ExpensesYearFilter";
// import ExpensesPriceSort from "./ExpensesPriceSort";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [priceSort, setPriceSort] = useState("");
  // const [isSorted, setIsSorted] = useState(false);

  const filterYearChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // const sortPriceChangeHandler = (selectedSort) => {
  //   setPriceSort(selectedSort);
  //   setIsSorted(true);
  // };

  return (
    <div>
      <Card className="expenses">
        <ExpensesYearFilter
          selected={filteredYear}
          onChangeYearFilter={filterYearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {/* <ExpensesPriceSort
          selected={priceSort}
          onChangePriceSort={sortPriceChangeHandler}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
