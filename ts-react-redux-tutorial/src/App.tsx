import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
const App: React.FC = () => {
    return (
        <div className="App">
            <CounterContainer />
        </div>
    );
};

export default App;
