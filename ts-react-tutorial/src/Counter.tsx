import React, { useState, useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" }; // 액션을 | 로 엮어서 냐열

// 리듀서를 만들 땐 파라미터로 받아오는 상태의 타입 = 함수의 리턴하는 타입 지키는 것이 매우 중요!
function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("unhandled action");
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: "INCREASE" });
    const onDecrease = () => dispatch({ type: "DECREASE" });
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
