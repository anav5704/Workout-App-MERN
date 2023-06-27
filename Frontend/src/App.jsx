import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/home'
import Nav from './components/nav'

function App() {
  return (
    <>
    <BrowserRouter>
        <Nav />
        <div className="pages ">
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
