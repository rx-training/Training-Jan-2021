import React from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  expenses,
  handleDelete,
  handleEdit,
  clearItems,
}) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button type="button" className="btn" onClick={clearItems}>
          clear expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
}
