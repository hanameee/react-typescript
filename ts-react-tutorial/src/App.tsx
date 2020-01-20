import React from "react";
import "./App.css";
import Counter from "./Counter";
const App: React.FC = () => {
    return (
        <div className="App">
            {/* <MyForm onSubmit={onSubmit} /> */}
            <Counter />
        </div>
    );
};

export default App;
