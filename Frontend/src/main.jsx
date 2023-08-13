import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/workoutContext.jsx'
import { authContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <authContextProvider>
      < WorkoutContextProvider >
        <App />
      </WorkoutContextProvider>
    </authContextProvider>
  </React.StrictMode>,
)
