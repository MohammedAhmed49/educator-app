import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <Link to="/" className="mr-3 text-secondary">Home</Link>
            <Link to="/courses" className="mr-3 text-secondary">Courses</Link>
            <Link to="/sign-in" className="mr-3 text-secondary">Sign in</Link>
            <Link to="/sign-up" className="mr-3 text-secondary">Sign up</Link>
        </div>
    )
}

export default Navbar;