import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../modules/todos";

function TodoInsert() {
    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: custom hook 사용해서 새 항목 등록하기
        setValue("");
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default TodoInsert;
