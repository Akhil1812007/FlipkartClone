import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
import "./LoginModal.css"
import supabase from '../../supabase';
const LoginModal = ({isOpen,setClose}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginType, setLoginType] = useState(true)
   
    const signup = async () => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if(data.user){
        alert("Account created please verify the email");
      }
      console.log(data, error);
    };
  
    const login = async () => {
      console.log("login called");
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if(error){
        alert(error?.message)
      }
      console.log(data, error);
      
      
    };


  return isOpen?(
  <div className='overLay'>
    <div className='LoginModal'>
        <div className='left'>
            <div className='left-container'>
                <p className='Login-title'>
                    <p className='Login-des'>
                    Get access to your Orders, Wishlist and Recommendations
                    </p>

                </p>
            </div>
        </div>
        <div className='right'>
            <input
                type='email'
                className='Login-input'
                placeholder='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}


            />
            <input
                type='email'
                className='Login-input'
                placeholder='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}


            />
            <p className='termsandcon'>
                Click here to agree terms and conditions {" "}
                <span style={{color: 'blue'}}>terms of use and </span>{" "}
                <span style={{color: 'blue'}}>privacy policy</span>
            </p>
            {loginType ? (
            <button className="Login-btn" onClick={login} >
              Login
            </button>) : (
            <button className="Login-btn" onClick={signup} >
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setClose(false)}>
          <RxCross2 />
        </div>
    </div>

  </div>):(<></>);
};

export default LoginModal