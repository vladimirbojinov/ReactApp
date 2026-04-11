import { Link } from "react-router-dom";
import Logout from "./logout";
import '../styles/nav.css';

function Nav() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/aboutme">About Me</Link>
            </div>
            <Logout />
        </nav>
    );

}

export default Nav;