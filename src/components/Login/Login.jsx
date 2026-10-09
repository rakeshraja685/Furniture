import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import CreateAccount from "./CreateAccount.jsx"
function Login() {
    return (
        <>

            <section className="Login d-flex justify-content-center align-items-center vh-100">
                <div className=" LoginContainer">
                    <div className=' d-flex flex-column gap-4 mt-5 justify-content-center align-items-center Login content '>
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="#2b82f6" width="70px" height="70px">
                            <circle cx="12" cy="12" r="12" />
                            <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 9c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff" />
                        </svg>
                        <h1>Sign in</h1>                       
                            <input type="text" placeholder='Username' style={{width:'80%'}} className='logininput'/>
                            <input type="password" placeholder='Password' style={{width:'80%'}} className='logininput'/>   
                            <button className='LoginButton'>Login</button>             
                            <div className=' container-sm d-flex justify-content-evenly loginAncor'>
                                 <Link to="/CreateAccount">Create an Account</Link>
                                 <Link to="/">Forgot Password</Link>
                            </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Login;