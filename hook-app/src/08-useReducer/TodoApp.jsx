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
            <h1>Todo App 10, <small>pendentes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map(todo => (
                       
                                <li key = {todo.id}className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">item 1</span>
                                    <button className="btn btn-danger">Apagar</button>
                                </li>

                            ))
                        }
                    </ul>
                </div>

            <div className="col-5">
                <h4>Adicionar TODO</h4>
                <hr />
                <form>
                    <input type="text"
                           placeholder="O que tem que fazer?"
                           className="form-control"
                           />  

                           <button type="submit"
                                   className="btn btn-outline-primary mt-1" >
                                Adicionar        
                            </button>   
                </form>
            </div>

            </div>
        </>
    )
}