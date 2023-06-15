import React from 'react'
import ReactDOM from 'react-dom/client'

//import { HooksApp } from './HooksApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
)
