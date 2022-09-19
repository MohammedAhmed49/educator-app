import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signOutCustom } from "../../utils/firebase/firebase.utils";

const Navbar = ({user}) => {
    
    const signOutHandler = (e) => {
        e.preventDefault();
        const singOut = async () => {
            try {
                await signOutCustom();
            } catch (error) {
                console.log(error.message);
            }
        }

        singOut();
    } 

    return (
        <div className="navbar shadow-lg py-4 border-b border-secondary">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="navbar__logo">
                        <Link to="/"><img src={logo} alt="Educator logo" className="w-20"/></Link>
                        
                    </div>

                    <div className="navbar__links">
                        <Link to="/" className="mr-5 text-secondary">Home</Link>
                        <Link to="/courses" className="mr-5 text-secondary">Courses</Link>
                        {
                            user ? (<>
                                    <Link to="/profile" className="mr-5 text-secondary">Profile</Link>
                                    <a href="/" onClick={(e) => signOutHandler(e)} className="mr-5 text-secondary">Sign Out ({user.displayName})</a>
                                </>) : 
                                (<>
                                    <Link to="/sign-in" className="mr-5 text-secondary">Sign in</Link>
                                    <Link to="/sign-up" className="text-secondary">Sign up</Link>
                                </>)
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;