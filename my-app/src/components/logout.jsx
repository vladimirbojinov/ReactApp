import { Link } from "react-router-dom";
import styleBtn from '../styles/button.module.css';

function Logout() {
    if (localStorage.getItem('username') == null) {
        return (
            <div className="user-action">
                <Link className={`${styleBtn.btn} ${styleBtn.btnSecond}`} to='/register'>Register</Link>
                <Link className={`${styleBtn.btn} ${styleBtn.btnSecond}`} to='/login'>Login</Link>
            </div>
        );
    } else {
        return (
            <div className="user-action">
                <button className={`${styleBtn.btn} ${styleBtn.btnSecond}`} onClick={() => { localStorage.clear(); window.location.reload() }}>Logout</button>
            </div>
        );
    }
}

export default Logout;