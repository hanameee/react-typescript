import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

const App: React.FC = () => {
    return (
        <div className="App">
            <TodoInsert />
            <TodoList />
        </div>
    );
};

export default App;
