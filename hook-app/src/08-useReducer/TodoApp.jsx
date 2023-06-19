import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Coletar a pedra da alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Coletar a pedra da alma',
        done: false
    }
]

export const TodoApp = () => {

    const[state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </>
    )
}