import { Outlet } from "react-router-dom";
import Header from "./header/header.component";

const Layout = (props) => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;