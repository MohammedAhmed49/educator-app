import { Outlet } from "react-router-dom";
import Header from "./header/header.component";

const Layout = ({user}) => {
    return(
        <>
            <Header user={user}/>

            <main>
                <Outlet />
            </main>
            
        </>
    )
}

export default Layout;