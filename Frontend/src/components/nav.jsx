import { Link } from "react-router-dom"

function Nav() {
    return(
        <nav className="p-5 bg-slate-800 text-center">
            <Link  to="/">
             <h1 className="text-xl font-extrabold italic tracking-widest">M.E.R.N Workout</h1>
            </Link>
        </nav>
    )
}

export default Nav