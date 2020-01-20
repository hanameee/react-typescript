import React from "react";
import "./App.css";
import MyForm from "./MyForm";
const App: React.FC = () => {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return (
        <div className="App">
            <MyForm onSubmit={onSubmit} />
        </div>
    );
};

export default App;
