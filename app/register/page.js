import React from 'react'
import Link from 'next/link';

const Register = () => {
    return (
        <div className='auth-card'>
            <div className='auth-card-header'>

                <h1>Login</h1>
                <img src="logo.png" className='img-fluid' alt="Logo" />
            </div>
            <div className='auth-card-body'>

                <form>
                    <div className="input-group">
                        <span className='input-group-text'> <i className="fa-solid fa-user"></i> </span>
                        <input type="text" className='form-control' placeholder="Enter Your Email" />
                    </div>
                    <div className="input-group mt-3">
                        <span className='input-group-text'> <i className="fa-solid fa-user"></i> </span>
                        <input type="text" className='form-control' placeholder="Enter Your Password" />
                    </div>
                    <button className='btn btn-outline-info mt-3 w-100'>Submit</button>
                </form>
            </div>
            <div className='auth-card-footer'>
                <Link href={'/'}><i class="fa-solid fa-fingerprint"></i> Forgot Password</Link>
                <Link href={'/register'}><i class="fa-solid fa-user-tie"></i>Register Here</Link>
            </div>
        </div>
    )
}

export default Register;