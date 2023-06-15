import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () =>{

    const [formState, setFormState] = useState({
        username: 'paulo',
        email:'paulo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target})  => {
       const { name, value} = target;
       setFormState({
             ...formState,
             [name]: value
       })
        console.log({name, value})
    }


    useEffect(() => {
     //   console.log('useEffect Called');
    }, [])

    useEffect(() => {
      //  console.log('formState Called');
    }, [formState])

    useEffect(() => {
     //   console.log('email Called');
    }, [email])

    return(
        <>
            <h1>Formulario Simples</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value = {username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}

            />

            {
                (username === 'paulo') &&  <Message />
            }
        </>
    )
}