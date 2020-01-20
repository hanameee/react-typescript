import React, { useState, useRef } from "react";

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    // useRef 사용 시 Generics 로 타입을 정함
    // useRef를 사용하여 DOM에 대한 정보를 담을 땐, 초깃값을 null 로 설정해야 함
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: "",
        description: ""
    });
    const { name, description } = form;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            description: ""
        });
        // DOM에 대한 정보를 담은 Ref의 current 값을 사용하려면 null 체킹을 해줘야 함
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input
                name="description"
                value={description}
                onChange={onChange}
                ref={inputRef}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;
