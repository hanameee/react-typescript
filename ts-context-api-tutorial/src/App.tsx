import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";

const App: React.FC = () => {
    return (
        <TodosContextProvider>
            <div className="App">
                <TodoForm />
                <TodoList />
            </div>
        </TodosContextProvider>
    );
};

export default App;
