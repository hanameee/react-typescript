import React, { useState } from "react";

function TodoForm() {
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue("");
    };
    console.log(value);
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
