import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [id, setId] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    //If a user is already logged send him to home page
    useEffect(() => {
        if (localStorage.getItem('username') != null) navigate('/');
    }, []);

    //Sends all the data to the Database
    function HandleSubmit(e) {
        e.preventDefault();
        let userObj = { id, username, password };

        if (IsDataValid() == false) return;

        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userObj)
        }
        ).then(() => {
            alert('Registration complete!');
            navigate('/login');
        });
    }

    function IsDataValid() {
        let errorMsg = '';

        if (username == null || username == "") errorMsg += ' Username';
        if (password == null || password == "") errorMsg += ' Password';

        if (errorMsg != '') {
            alert(errorMsg + ' field/s are empty!');
            return false;
        }

        if (IsUsernameTaken()) {
            alert('Username taken!');
            return false;
        }

        return true;
    }

    async function IsUsernameTaken() {
        const res = await fetch('http://localhost:8000/user?username=' + username);
        const data = await res.json();

        if (Object.keys(data).length > 0) return true;

        return false;
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Username*</label>
                    <input value={username} onChange={e => setUsername(e.target.value.trim())} />
                    <label>Password*</label>
                    <input value={password} onChange={e => setPassword(e.target.value.trim())} />
                </div>
                <button type="submit">Register</button>
                <Link to="/login">Have an account?</Link>
            </form>
        </div>
    );
}

export default Register;