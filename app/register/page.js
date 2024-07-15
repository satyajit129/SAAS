"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Constants from "@/Componants/Constants";

const Register = () => {
    const [input, setInput] = useState({});
    const [errors, setError] = useState([]);

    const handleInput = (e) => {
        setError(prevErrors => ({
            ...prevErrors,
            [e.target.name]: null,
        }));
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Constants.BASE_URL}/register`, input);
            console.log(response);
            const name = response.data.data.user.name;
            const token = response.data.data.token;
            localStorage.setItem('name', name);
            localStorage.setItem('token', token);
            window.location.href = '/';
        } catch (errors) {
            if (errors.response.status = '422') {
                setError(errors.response.data.errors);
            }
        }
    };
    console.log(input);
    return (
        <div className="auth-card">
            <div className="auth-card-header">
                <h1>Register</h1>
                <img src="logo.png" className="img-fluid" alt="Logo" />
            </div>
            <div className="auth-card-body">
                <form>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="fa-regular fa-user"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Full Name"
                            name="name"
                            value={input.name}
                            onChange={handleInput}
                        />
                        {errors.name != undefined && (
                            <p className="custom-validation-message small">{errors.name[0]}</p>
                        )}
                    </div>
                    <div className="input-group mt-4">
                        <span className="input-group-text">
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            name="phone"
                            value={input.phone}
                            onChange={handleInput}
                        />
                        {errors.phone != undefined && (
                            <p className="custom-validation-message small">{errors.phone[0]}</p>
                        )}
                    </div>
                    <div className="input-group mt-4">
                        <span className="input-group-text">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            name="email"
                            value={input.email}
                            onChange={handleInput}
                        />
                        {errors.email != undefined && (
                            <p className="custom-validation-message small">{ errors.email[0] }</p>
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
                            <p className="custom-validation-message small">{ errors.password[0] }</p>
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline-info mt-4 w-100"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="auth-card-footer">
                <Link href={"/"}>
                    <i className="fa-solid fa-fingerprint"></i> Forgot Password
                </Link>
                <Link href={"/login"}>
                    <i className="fa-solid fa-user-tie"></i>Login Here
                </Link>
            </div>
        </div>
    );
};

export default Register;
