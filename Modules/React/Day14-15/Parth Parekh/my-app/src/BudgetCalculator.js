import React, { useState, useEffect } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import uuid from "uuid/v4";
import Alert from "./components/Alert";
import "./project.css";
import ExpenseList from "./components/ExpenseList";

const initialExpense = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];
export default function BudgetCalculator() {
    // state values
    const [expenses, setExpense] = useState(initialExpense);

    //single charge
    const [charge, setCharge] = useState("");

    // single amount
    const [amount, setAmount] = useState("");

    // alert
    const [alert, setAlert] = useState({ show: false });

    //edit
    const [edit, setEdit] = useState(false);

    //edit item
    const [id, setId] = useState(0);

    //Use Effect
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    // handelCharge
    const handleCharge = (e) => {
        //console.log(e.target.value);
        setCharge(e.target.value);
    };
    //handelAmount
    const handleAmount = (e) => {
        //console.log(e.target.value);
        setAmount(e.target.value);
    };

    //handleAlert
    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };

    //handelSubmit
    const handelSubmit = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                let tempExpenses = expenses.map((item) => {
                    return item.id === id ? { ...item, charge, amount } : item;
                });
                setExpense(tempExpenses);
                setEdit(false);
                handleAlert({ type: "success", text: "item edited" });
            } else {
                const singleExpense = { id: uuid(), charge, amount };
                setExpense([...expenses, singleExpense]);
                handleAlert({ type: "success", text: "item added" });
            }

            setCharge("");
            setAmount("");
        } else {
            handleAlert({
                type: "danger",
                text: `charge can't be empty and amount value has to be bigger than zero`,
            });
        }
    };

    //clear all items
    const clearItems = () => {
        //console.log("clear items");
        setExpense([]);
        handleAlert({ type: "danger", text: "all items Deleted Successfully" });
    };

    //delete single item
    const handleDelete = (id) => {
        //console.log(`delete id : ${id}`);
        let tempExpenses = expenses.filter((item) => item.id !== id);
        setExpense(tempExpenses);
        handleAlert({ type: "danger", text: "item Deleted" });
    };

    //handle edit
    const handleEdit = (id) => {
        //console.log(`Edited  id : ${id}`);
        let expense = expenses.find((item) => item.id === id);
        //console.log(expense);
        let { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setId(id);
    };
    return (
        <>
            {alert.show && <Alert type={alert.type} text={alert.text} />}

            <h1> Budget Calculator</h1>
            <main className="App text-dark">
                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    handleSubmit={handelSubmit}
                    edit={edit}
                />
                <ExpenseList
                    expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                />
            </main>
            <h1>
                total spending :{" "}
                <span className="total">
                    $
                    {expenses.reduce((acc, curr) => {
                        return (acc += parseInt(curr.amount));
                    }, 0)}
                </span>
            </h1>
        </>
    );
}
