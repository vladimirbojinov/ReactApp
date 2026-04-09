import { Link } from "react-router-dom";
import Logout from "./logout";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Logout />
        </nav>
    );

}

export default Nav;