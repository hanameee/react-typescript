// 1-1. action type 선언
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

// 1-2. action 생성함수 선언
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text
});
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
});

// 1-3. action 객체들에 대한 타입스크립트 type 선언
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

// 2. State의 타입스크립트 type 및 초기값 선언
// Todo type은 나중에 컴포넌트에서 불러와서 사용할 것이기에 export
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};
type TodosState = Todo[];
const initialState: TodosState = [
    {
        id: 1,
        text: "REACT 배우기",
        done: true
    },
    {
        id: 2,
        text: "JS 배우기",
        done: true
    },
    {
        id: 3,
        text: "TS 배우기",
        done: false
    }
];

// 3. 리듀서 선언
function todos(
    state: TodosState = initialState,
    action: TodosAction
): TodosState {
    switch (action.type) {
        case ADD_TODO:
            const nextId =
                state.length !== 0
                    ? Math.max(...state.map(todo => todo.id)) + 1
                    : 1;
            return state.concat({
                id: nextId,
                text: action.payload,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;
