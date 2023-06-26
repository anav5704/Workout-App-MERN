import { Link } from "react-router-dom"

function Nav() {
    return(
        <nav className="p-5 border-b border-slate-600">
            <Link  to="/">
             <h1 className="text-xl font-extrabold italic tracking-widest">M.E.R.N Workout</h1>
            </Link>
        </nav>
    )
}

export default Nav