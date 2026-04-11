import { Link } from "react-router-dom";

function Logout() {
    if (localStorage.getItem('username') == null) {
        return (
            <div className="user-action">
                <Link className="btn btn-second" to='/register'>Register</Link>
                <Link className="btn btn-second" to='/login'>Login</Link>
            </div>
        );
    } else {
        return (
            <div className="user-action">
                <button className="btn btn-second" onClick={() => { localStorage.clear(); window.location.reload() }}>Logout</button>
            </div>
        );
    }
}

export default Logout;