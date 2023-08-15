import { useLogout } from "../hooks/useLogout"
import { Link } from "react-router-dom"

function Nav() {

    const { logout }  = useLogout()
    const handleClick = () => {
        logout()
    }

    return(
        <nav className="p-5 bg-slate-800 flex items-center justify-between">
            <div>
                <Link  to="/">
                    <h1 className="text-xl font-extrabold italic tracking-widest">M.E.R.N Workout</h1>
                </Link>
            </div>

        { !localStorage.getItem("user") ? 
            <div className="">
                <Link to="/login" className="mr-5">Log In</Link>
                <Link to="/signup" className="bg-teal-400 p-2 rounded-md font-semibold text-slate-800">Sign Up</Link>
            </div>
            :
            <div>
                <span onClick={handleClick} className="bg-teal-400 p-2 rounded-md font-semibold text-slate-800">Log Out</span>
            </div>
        }
            

        </nav>
    )
}

export default Nav