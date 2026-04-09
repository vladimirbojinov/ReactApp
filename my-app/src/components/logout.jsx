import { Link } from "react-router-dom";

function Logout() {
    if (localStorage.getItem('username') == null) {
        return (
            <div>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={() => { localStorage.clear(); window.location.reload() }}>LogOut</button>
            </div>
        );
    }
}

export default Logout;