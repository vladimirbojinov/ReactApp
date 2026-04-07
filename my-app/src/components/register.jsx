import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const[id, idChange] = useState();
    const[username, usernameChange] = useState();
    const[password, passwordChange] = useState();

    const navigate = useNavigate();

    //Sends all the data to the Database
    function HandleSubmit(e) {
        e.preventDefault();
        let userObj = {id, username, password};
        
        if (IsDataValid() === false) return;

        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(userObj)
            }
        ).then(() => {
            alert('Registration complete!');
            //navigate('/login');
        });
    }

    //Validates data
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

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Username*</label>
                    <input value={username} onChange={e => usernameChange(e.target.value.trim())} />
                    <label>Password*</label>
                    <input value={password} onChange={e => passwordChange(e.target.value.trim())} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;