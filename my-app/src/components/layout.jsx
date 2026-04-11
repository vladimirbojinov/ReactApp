import { Outlet } from "react-router-dom";
import Footer from "./footer"
import Nav from "./nav"

export const AppLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}