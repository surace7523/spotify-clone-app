
import React from 'react'
import './Login.css';
import { loginUrl } from "./spotify";


function Login() {
    return (
        <div className="login">
            {/*spotify logo */}
           
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
            alt=""/>

            {/*login with spotify logo */}
            <a href={loginUrl}>Log In With Spotify</a>

          
        </div>
    );
}

export default Login;
