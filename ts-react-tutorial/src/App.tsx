import React from "react";
import "./App.css";
import Greetings from "./Greetings";

const App: React.FC = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return (
        <div className="App">
            <Greetings onClick={onClick} name="react" />
            <Greetings
                onClick={onClick}
                name="hannah"
                mark="?"
                alias="hanameee"
            />
        </div>
    );
};

export default App;
