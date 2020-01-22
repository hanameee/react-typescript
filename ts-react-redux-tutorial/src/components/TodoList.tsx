import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos: Todo[] = []; // TODO: custom hook 사용해서 조회
    if (todos.length === 0) return <p>등록된 할일이 없습니다</p>;
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
