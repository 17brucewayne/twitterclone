import React from "react";
import "./Loginpage.css";
import Navbar from "./navbar";
import { useState } from "react";
import validator from 'validator';
import { useHistory } from "react-router-dom";

const Login = () => {
const [emailInput, setEmailInput] = useState('')
 const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailInput('Valid')
    } else {
      setEmailInput('Invalid')
    }
  }

const [passInput, setPassInput] = useState('')

      const validatePassword = (e) => {
           var password=e.target.value;

        if (validator.isStrongPassword(password, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setPassInput('Strong')
        } else {
          setPassInput('Weak')
        }
      }
      // const history = useHistory();
      const submit=()=>{
        if(emailInput==="Valid" && passInput==="Strong"){
          // history.push('/Homepage/Homepageindex')
          alert("its working");
          }
      }

    return (

        <>
            <Navbar />
            <form className="form">
                <h3 >SIGN IN</h3>
                <div className="mb-3 input">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:{emailInput}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => validateEmail(e)} />
                </div>
                <div className="mb-3 input">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password:{passInput}</label>
                    <input type="password" onChange={(e) => validatePassword(e)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="button" onClick={submit} className="btn btn-primary button">Submit</button>
            </form>
        </>
    );
};
export default Login;
