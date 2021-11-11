import "./App.css";

function App() {
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
            </div>
        </div>
    );
}

export default App;
