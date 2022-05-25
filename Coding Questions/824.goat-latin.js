import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState({
        charge: "",
        amount: 0,
    });
    const [type, setType] = useState("submit");
    const [curIndex, setCurIndex] = useState(0);
    const [budget, setBudget] = useState([]);
    const [total, setTotal] = useState(0);
    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        //disables the default activities by the browser on an element.
        e.preventDefault();
        if (type === "submit") {
            setBudget([...budget, data]);
        } else {
            budget[curIndex] = data;
            setBudget([...budget]);
            setType("submit");
        }
        //reset the form
        setData({
            charge: "",
            amount: "",
        });
    };

    const handleEdit = (index) => {
        setType("edit");
        let newBudget = [...budget];
        setData({
            charge: newBudget[index].charge,
            amount: newBudget[index].amount,
        });
        setCurIndex(index);
    };
    const handleRemove = (index) => {
        let newBudget = [...budget];
        newBudget.splice(index, 1);
        setBudget(newBudget);
    };
    const handleClearAll = () => {
        setBudget([]);
    };

    useEffect(() => {
        let total = 0;
        budget.forEach((item) => {
            total += Number(item.amount);
        });
        setTotal(total);
    }, [budget]);

    return (
        <div className="App">
            <h1>Budget Calculator</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Charge</span>
                        <input placeholder="e.g. rent" name="charge" type="text" value={data.charge} required onChange={(e) => handleOnChange(e)}></input>
                    </div>
                    <div>
                        <span>Amount</span>
                        <input type="number" placeholder="e.g. $100" name="amount" min="1" value={data.amount} required onChange={(e) => handleOnChange(e)}></input>
                    </div>
                    <button type="submit">{type === "submit" ? "Submit" : "Edit"}</button>

                    {budget.map(({ charge, amount }, index) => (
                        <div className="budget-item-wrapper" key={index}>
                            <span>{charge}</span>
                            <span>{amount}</span>
                            <span onClick={() => handleEdit(index)}>Edit</span>
                            <span onClick={() => handleRemove(index)}>Remove</span>
                        </div>
                    ))}
                </form>
                <button onClick={() => handleClearAll()}>Clear All</button>
                <div>Total: {total} </div>
            </div>
        </div>
    );
}
