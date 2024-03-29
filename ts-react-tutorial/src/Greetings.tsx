import React from "react";

interface GreetingsProps {
    name: string;
    mark: string;
    alias?: string;
    // string type인 name 파라미터를 받아 리턴값이 void인 함수
    onClick: (name: string) => void;
}

function Greetings({ name, mark, alias, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hi, {name} {mark}
            {alias && <p>May I call you {alias}?</p>}
            <div>
                <button onClick={handleClick}>Click me!</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    name: "there",
    mark: "!"
};

export default Greetings;
