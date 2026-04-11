import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from '../styles/form.module.css';
import styleBtn from '../styles/button.module.css';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    //If a user is already logged send him to home page
    useEffect(() => {
        if (localStorage.getItem('username') != null) navigate('/');
    }, []);

    function ProcessLogin(e) {
        e.preventDefault();

        if (IsDataValid() === false) return;

        fetch('http://localhost:8000/user?username=' + username)
            .then((res) => {
                return res.json();
            }).then((res) => {
                if (Object.keys(res).length == 0) {
                    alert('Invalid username');
                } else if (res[0].password !== password) {
                    alert('Invalid password');
                } else {
                    localStorage.setItem('username', username);
                    navigate('/');
                }
            });
    }

    function IsDataValid() {
        let errorMsg = ''

        if (username == null || username == "") errorMsg += ' Username';
        if (password == null || password == "") errorMsg += ' Password';

        if (errorMsg != '') {
            alert(errorMsg + ' field/s are empty!');
            return false;
        }

        return true;
    }

    return (
        <div className={style.page}>
            <div className={style.container}>
                <h1>Login page</h1>
                <form onSubmit={ProcessLogin}>
                    <div>
                        <label>Username*</label>
                        <div>
                            <input value={username} onChange={e => setUsername(e.target.value.trim())} />
                        </div>
                        <label>Password*</label>
                        <div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value.trim())} />
                        </div>
                    </div>
                    <button className={`${styleBtn.btn} ${styleBtn.btnPrime}`}>Login</button>
                    <p>Don't have an account? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;