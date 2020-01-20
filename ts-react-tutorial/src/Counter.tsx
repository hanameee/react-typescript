import React, { useState } from "react";

function Counter() {
    // generics 를 명시해주지 않아도 useState가 알아서 타입을 유추함 (not mandatory)
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    // 아래와 같이 타입이 까다로운 구조를 가진 객체(or배열)일때는 아래처럼 generics를 명시해주는 것이 좋다.
    // initial Value로 빈 배열만 넣었을 때 해당 배열이 어떤 타입으로 이루어진 배열인지 추론 할 수 없기 때문에!
    type Todo = { key: number; text: string; done: boolean };
    const [todos, setTodos] = useState<Todo[]>([
        { key: 1, text: "첫번째 투두", done: true },
        { key: 2, text: "두번째 투두", done: false }
    ]);
    const todoList = todos.map(todo => (
        <ul>
            <li>text:{todo.text}</li>
        </ul>
    ));
    return (
        <div>
            <h1>counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
            <h1>todos</h1>
            {todoList}
        </div>
    );
}

export default Counter;
