import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
    const [value, setValue] = useState("");
    const dispatch = useTodosDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: "CREATE",
            text: value
        });
        setValue("");
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="what is your todo?"
                onChange={e => setValue(e.target.value)}
            />
            <button>submit</button>
        </form>
    );
}

export default TodoForm;
