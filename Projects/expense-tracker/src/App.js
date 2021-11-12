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
                    <span>$260</span>
                </div>
                <div>
                    <div>
                        <div className="main-title">INCOME</div>
                        <span>$500</span>
                    </div>
                    <div>
                        <div className="main-title">EXPENSE</div>
                        <span>$240</span>
                    </div>
                </div>
                <div>
                    <span>History</span>
                </div>
                <div>
                    <span>Add new transaction</span>
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
