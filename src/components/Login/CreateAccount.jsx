import React from 'react';
import { Link } from 'react-router-dom';
import "./CreateAccount.css";
function CreateAccount() {
    return (
        <>

            <section className="CreateAccount d-flex justify-content-center align-items-center vh-100">
                <div className=" CreateContainer">
                    <div className=' d-flex flex-column gap-4 mt-5 justify-content-center align-items-center CreateContnet '>
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="#2b82f6" width="70px" height="70px">
                            <circle cx="12" cy="12" r="12" />
                            <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 9c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff" />
                        </svg>
                        <h1>Sign up</h1>                       
                            <input type="text" placeholder='Username' style={{width:'80%'}} className='Createininput'/>
                            <input type="email" placeholder='Email Id' style={{width:'80%'}} className='Createininput'/>
                            <input type="password" placeholder='Password' style={{width:'80%'}} className='Createininput'/>   
                            <button className='LoginButton'>Sign up</button>             
                            <div className=' container-sm d-flex justify-content-evenly CreateAncor'>
                               <Link to="/Login">Already Have a Account</Link>
                               <Link to="/">Forgot Password</Link>
                            </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default CreateAccount;