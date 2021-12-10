import React, { useState } from "react";
import "./App.css";

function App() {
    const handleSubmit = () => {
        setLoading(true);
    };
    const [loading, setLoading] = useState(false);

    return (
        <div className="main-container">
            <div className="main-header">Expense Tracker</div>
            <div className="main-content">
                <div>
                    <div className="main-title">YOUR BALANCE</div>
                    <span className="balance">$260.00</span>
                </div>
                <div className="main-income">
                    <div className="income-wrapper">
                        <div className="main-title">INCOME</div>
                        <span className="income">$500.00</span>
                    </div>
                    <div className="income-wrapper right">
                        <div className="main-title">EXPENSE</div>
                        <span className="expense">$240.00</span>
                    </div>
                </div>
                <div>
                    <div className="main-title underline">History</div>
                    <div className="history-item">
                        <span>Cash</span>
                        <span>+500</span>
                        <span class="material-icons delete-btn">delete</span>
                    </div>
                    <div className="history-item negative">
                        <span>Book</span>
                        <span>-40</span>
                        <span class="material-icons delete-btn">delete</span>
                    </div>
                    <div className="history-item negative">
                        <span>Camera</span>
                        <span>-200</span>
                        <span class="material-icons delete-btn">delete</span>
                    </div>
                </div>
                <div>
                    <div className="main-title underline">Add new transaction</div>
                    <div>
                        <div className="main-title small">Text</div>
                        <input type="text" className="input-text" placeholder="Enter text..." required></input>
                    </div>
                    <div>
                        <div className="main-title small">
                            <span>Amount</span>
                            <span>(negtive - expense, positive - income)</span>
                        </div>
                        <input type="text" className="input-text" placeholder="Enter amount..." required></input>
                    </div>
                </div>
                <button className="button" onClick={() => handleSubmit()}>
                    {loading ? "Loading ... " : "Add Transaction"}
                </button>
            </div>
        </div>
    );
}

export default App;
