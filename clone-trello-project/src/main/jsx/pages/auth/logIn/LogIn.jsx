import React, {useState} from "react";
import {Navigate} from 'react-router-dom';

function LogIn(props) {

    const usernameEl = React.useRef(null);
    const passwordEl = React.useRef(null);

    const [loggedIn, setLoggedIn] = useState(null);

    function onSubmit() {

        let login = props.authenticator.auth({
            username: usernameEl.current.value,
            password: passwordEl.current.value
        });
        login.catch(reason => {
            console.log(reason);
            setLoggedIn(false);
        });
        login.then(() => {
            console.log("Login successful");
            setLoggedIn(true);
        });
    }

    if (loggedIn === true) {
        return <Navigate to='/cards'/>
    }
    return (
        <div className="auth-main-block">
            <h1>Log in form</h1>
            <div className="auth-block">
                {loggedIn === false ? <h5>Login failed</h5> : <></>}
                <input
                    ref={usernameEl}
                    className="auth-input"
                    type="text"
                    placeholder="Enter your username"
                />
                <input
                    ref={passwordEl}
                    className="auth-input"
                    type="text"
                    placeholder="Enter your password"
                />

                {/* onClick function must contain prevent default */}
                <button className="auth-button" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default LogIn;
