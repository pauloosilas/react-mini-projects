import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
//import { HooksApp } from './HooksApp.jsx'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
//import { FocusScreen } from './04-useRef/FocusScreem.jsx'

//import './08-useReducer/intro-reducer';
 
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
 //</React.StrictMode>,
)
