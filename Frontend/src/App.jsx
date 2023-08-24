import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import Home from './pages/home'
import Login from "./pages/login"
import Signup from "./pages/signup"
import Nav from './components/nav'
import Create from "./pages/Create"
import Update from "./pages/Update"

function App() {

  const { user } = useAuthContext()

  return (
    <>
    <BrowserRouter>
        <Nav />
        <div className="pages">
            <Routes>
                <Route path="/" element={ user ? <Home /> : <Navigate to="/signup"/> }/>
                <Route path="/login" element={ !user ? <Login /> : <Navigate to="/"/> }/>
                <Route path="/signup" element={ !user? <Signup /> : <Navigate to="/"/> }/>
                <Route path="/create" element={ <Create /> }/>
                <Route path="/update/:id" element={ <Update /> }/>
            </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
