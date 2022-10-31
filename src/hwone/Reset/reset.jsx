import InputField from "../components/inputfield/inputfield";
import "./reset.css";
import Button from "../components/button/button";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { useHistory } from "react-router";

function Reset() {
    const [username, setUsername] = useState("");
    const history = useHistory();

    function onNext() {
        if (username) {
            localStorage.setItem("username", username);
            history.push("/password");
        }
    }

    return (
        <div className='signin-reset'>
            <h1>signin</h1>
            <InputField
                onChange={(e) => setUsername(e)}
                label='Username, Email or Phone number'
                placeholder='Enter your Username, Email or Phone number'
                type='text'
            />

            <div className='my-button-next'>
                <Button buttonName='Next Step' onClick={onNext} />
            </div>
            <div>
                <p>
                    ---------------------------------Or-------------------------------
                </p>
            </div>

            <div className='my-button-apple'>
                <Button buttonName='Login With Apples' />
                <div className='icon'>
                    <FaApple />
                </div>
            </div>

            <div className='my-button-facebook'>
                <Button buttonName='Login With Facebook' />

                <div className='icon'>
                    <FaFacebook />
                </div>
            </div>

            <div className='my-button-google'>
                <Button buttonName='Login Google' />

                <div className='icon'>
                    <FaGoogle />
                </div>
            </div>
        </div>
    );
}
export default Reset;
