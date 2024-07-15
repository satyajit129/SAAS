"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Constants from "@/Componants/Constants";

const Login = () => {
    const [input, setInput] = useState({});
    const [errors, setError] = useState([]);
    const [responseMessage, setResponseMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleInput = (e) => {
        setError(prevErrors => ({
            ...prevErrors,
            [e.target.name]: null,
        }));
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setResponseMessage(null);

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post(`${Constants.BASE_URL}/login`, input);
            console.log(response.data.status_message);
            console.log('error up');
            if (response && response.data && response.data.status_message) {
                if (response.data.status === false) {
                    setResponseMessage(response.data.status_message);
                    setIsLoading(false);
                } else {
                    const name = response.data.data.user.name;
                    const token = response.data.data.token;
                    localStorage.setItem('name', name);
                    localStorage.setItem('token', token);
                    window.location.href = '/';
                    setIsLoading(false);
                }
            }
        } catch (errors) {
            if (errors.response.status = '422') {
                setError(errors.response.data.errors);
            }
            setIsLoading(false)
        }
    };
    return (
        <div className="auth-card">
            <div className="auth-card-header">
                <h1>Login</h1>
                <img src="logo.png" className="img-fluid" alt="Logo" />
            </div>
            <div className="auth-card-body">
                <form>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            name="email_or_phone"
                            value={input.email_or_phone}
                            onChange={handleInput}
                        />
                        {errors.email_or_phone != undefined && (
                            <p className="custom-validation-message small">
                                {errors.email_or_phone[0]}
                            </p>
                        )}
                        {responseMessage && (
                            <p className="custom-validation-message small">
                                {responseMessage}
                            </p>
                        )}
                    </div>
                    <div className="input-group mt-4">
                        <span className="input-group-text">
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Password"
                            name="password"
                            value={input.password}
                            onChange={handleInput}
                        />
                        {errors.password != undefined && (
                            <p className="custom-validation-message small">
                                {errors.password[0]}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline-info mt-4 w-100 animated"
                    >
                        { isLoading ?
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : 'Login'}
                    </button>
                </form>
            </div>
            <div className="auth-card-footer">
                <Link href={"/"}>
                    <i class="fa-solid fa-fingerprint"></i> Forgot Password
                </Link>
                <Link href={"/register"}>
                    <i class="fa-solid fa-user-tie"></i>Register Here
                </Link>
            </div>
        </div>
    );
};

export default Login;
