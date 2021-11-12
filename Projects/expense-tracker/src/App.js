import React from "react";
import "./App.css";

function App() {
    const handleSubmit = () => {};
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
                    <span className="main-title">History</span>
                    <div>
                        <span>Cash</span>
                        <span>+500</span>
                    </div>
                </div>
                <div>
                    <span className="main-title">Add new transaction</span>
                    <div>
                        <span>Text</span>
                        <textarea placeholder="Enter text..."></textarea>
                    </div>
                    <div>
                        <span>Amount</span>
                        <span>(negtive - expense, positive - income)</span>
                        <textarea placeholder="Enter amount..."></textarea>
                    </div>
                </div>
                <button onClick={() => handleSubmit()}>Add Transaction</button>
            </div>
        </div>
    );
}

export default App;
