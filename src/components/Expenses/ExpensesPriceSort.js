import React from "react";

import "./ExpensesPriceSort.css";

const ExpensesPriceSort = (props) => {
  const dropdownPriceSortChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);

    props.onChangePriceSort(event.target.value);
  };

  return (
    <div className="expenses-price-sort">
      <div className="expenses-price-sort__control">
        <label>Sort by Price</label>
        <select
          value={props.selected}
          onChange={dropdownPriceSortChangeHandler}
        >
          <option value="none">No Sort</option>
          <option value="highest">Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesPriceSort;
