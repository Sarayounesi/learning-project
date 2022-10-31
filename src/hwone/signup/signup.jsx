import InputField from "../components/inputfield/inputfield";
import "./signup.css";
import Button from "../components/button/button";
import React, { useState } from "react";

function Signup() {
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPassword, setUserPassword] = useState("");

    //

    function onSignupHandler() {
        if (userPhone && userPassword && userName) {
            const signupForm = {
                username: userName,
                password: userPassword,
                phone: userPhone,
            };
            console.log("sara");
            localStorage.setItem("userdetail", JSON.stringify(signupForm));
            localStorage.setItem("token", "2mlkcmwle");
            const s = JSON.parse(localStorage.getItem("token"));
            console.log(s);
        }
    }

    return (
        <div className='signup'>
            <h1>Signup</h1>

            <InputField
                label='Username'
                onChange={(e) => setUserName(e)}
                placeholder='Enter your username'
                type='text'
            />
            <InputField
                label='phone or email'
                onChange={(e) => setUserPhone(e)}
                placeholder='Enter your phone or email'
                type='text'
            />
   

            <InputField
                label='Password'
                onChange={(e) => setUserPassword(e)}
                placeholder='Enter your password'
                type='password'
            />

            <div className='my-button-signup'>
                <Button buttonName='Sign Up' onClick={onSignupHandler} />
            </div>
            <div className='endline'>
                {" "}
                <p className='q-title'>
                    Do you have an account?{" "}
                    <a className='q-btn' href='/signin'>
                        Sign in{" "}
                    </a>
                </p>{" "}
            </div>
            <div className='endline'>
                <p className='q-title'>
                    Are you an artist?{" "}
                    <a className='q-btn' href='/signin'>
                        Sign up as an artist{" "}
                    </a>{" "}
                </p>{" "}
            </div>
        </div>
    );
}

export default Signup;
