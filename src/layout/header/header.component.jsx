import Navbar from "../../components/navbar/navbar.component";


const Header = ({user}) => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white z-20">
            <Navbar user={user}/>
        </header>
    )
}

export default Header;