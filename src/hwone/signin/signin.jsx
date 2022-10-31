import "./signin.css";
import InputField from "../components/inputfield/inputfield";
import Button from "../components/button/button";
import React, { useState } from "react";
import { useHistory } from "react-router";

function Signin() {
    const [userPassword, setUserPassword] = useState("");
    const history = useHistory();

    function onPasswordHandler() {
        if (userPassword && localStorage.getItem("username")) {
            console.log(JSON.parse(localStorage.getItem("token")));
            const username = localStorage.getItem("username");
            const data = JSON.parse(localStorage.getItem("userdetail"));

            if (
                (data.username == username || data.phone == username) &&
                data.password == userPassword
            ) {
                localStorage.setItem("token", "2mlkcmwle");
            } else {
                alert("Username and Password doesn't match");
            }
        } else {
            alert("Wrong Input!");
        }
    }

    function onVerificationHandler() {
        alert("Email verification");
    }

    function goToSignup() {
        history.push("/signup");
    }

    return (
        <div className='signin'>
            <h1 onClick={goToSignup}>signin</h1>
            <InputField
                label='Password'
                onChange={(e) => setUserPassword(e)}
                placeholder='Enter your password'
                type='password'
            />
            <div className='resetline'>
                <a className='q-btn-reset' href='/reset'>
                    {" "}
                    Reset your password{" "}
                </a>

                <div className='my-button-signin'>
                    <Button buttonName='Sign in' onClick={onPasswordHandler} />
                </div>

                <div className='my-button-verification'>
                    <Button
                        buttonName='Send Verification Code'
                        onClick={onVerificationHandler}
                    />
                </div>
            </div>

            <div className='endline'>
                {" "}
                <p className='q-title'>
                    Do you have an account?{" "}
                    <a className='q-btn' href='/signup'>
                        Sign up
                    </a>
                </p>{" "}
            </div>
        </div>
    );
}

export default Signin;
