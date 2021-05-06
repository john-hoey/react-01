import { useState } from "react";
import ExpensesYearFilter from "./ExpensesYearFilter";
// import ExpensesPriceSort from "./ExpensesPriceSort";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [priceSort, setPriceSort] = useState("");
  // const [isSorted, setIsSorted] = useState(false);

  const filterYearChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    // setIsFiltered(true);
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
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <ExpensesPriceSort
          selected={priceSort}
          onChangePriceSort={sortPriceChangeHandler}
        /> */}
        {/* {props.items
          .filter((expense) => expense.date.getFullYear() === filteredYear)
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {props.items.map((expense) => {
          console.log(expense.date.getFullYear()); */}
        {/* {isFiltered
          ? props.items
              .filter(
                (expense) =>
                  expense.date.getFullYear().toString() ===
                  filteredYear.toString()
              )
              .map((filteredExpense) => (
                <ExpenseItem
                  key={filteredExpense.id}
                  title={filteredExpense.title}
                  amount={filteredExpense.amount}
                  date={filteredExpense.date}
                />
              ))
          : props.items.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
        ) */}
        {/* {isSorted
          ? props.items
              .sort((a, b) => (a.amount - b.amount ? 1 : -1))
              .map((sortedHigh2LowPrice) => {
                return (
                  <ExpenseItem
                    key={sortedHigh2LowPrice.amount}
                    title={sortedHigh2LowPrice.title}
                    amount={sortedHigh2LowPrice.amount}
                    date={sortedHigh2LowPrice.date}
                  />
                );
              })
          : props.items
              .sort((a, b) => (b.amount - a.amount ? -1 : 1))
              .map((sortedLow2HighPrice) => {
                return (
                  <ExpenseItem
                    key={sortedLow2HighPrice.amount}
                    title={sortedLow2HighPrice.title}
                    amount={sortedLow2HighPrice.amount}
                    date={sortedLow2HighPrice.date}
                  />
                );
              })} */}
        {/* {props.items.map((expense) => {
          console.log(expense.date.getFullYear());
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      </Card>
    </div>
  );
};

export default Expenses;
