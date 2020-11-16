import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, resetPassword, signInUserWithEmailAndPassword } from './LoginManager';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';
import fbLogo from '../../Icon/fb.png';
import googleLogo from '../../Icon/google.png';


function Login() {
    const [newUser,setNewUser] = useState(false);
    const [user,setUser] = useState({
      // before sing in user value
      isSignedIn : false,
      name:'',
      email:'',
      password:'',
      photo:'',
      confirmPassword:"",
      destination:"",
      error:"",
    });

    initializeLoginFramework();

    const setLoggedInUser = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

// sign in button handling
const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true)
    })
};


// sign in with facebook
const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
        handleResponse(res, true)
    })
};


const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
        history.replace(from);
    }
};


// event handler target value and name capture
const handleBlur = (e) =>{
  let isFieldValid = true;

  // email validation
  if (e.target.name === 'email') {
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  };

  // pass validation
  if (e.target.name === 'password') {
    const passCount = e.target.value.length > 6
    const passHasNumber = /\d{1}/.test(e.target.value);
    var isPassValid = passCount && passHasNumber;
    isFieldValid = isPassValid ;
  };

  // form validation if email and pass is valid
  if (isFieldValid) {
    const newUserInfo = {...user}
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
};

const handleSubmit = (e) => {
    // create account
  if (newUser && user.email && user.password.value === user.confirmPassword.value) {
    createUserWithEmailAndPassword(user.name, user.email, user.password)
    .then(res => {
        handleResponse(res, true)
    })
  };

//   sign in 
  if (!newUser && user.email && user.password) {
    signInUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      handleResponse(res, true)
    })
  }
  e.preventDefault();
};


return (
    <div>
      <div style={{textAlign:"center"}}>
          <form onSubmit={handleSubmit}>
          {newUser ? 
              <div className="input-form">
              <h3 style={{textAlign:'start', marginLeft:'20px'}}>Create an account</h3>
              <p><TextField style={{width:"90%"}} onBlur={handleBlur} name="name" label="First name" required /></p>
              <p><TextField style={{width:"90%"}} onBlur={handleBlur} name="last-name" label="Last name" required /></p>
              <p><TextField style={{width:"90%"}} onBlur={handleBlur} name="email" label="Username or Email" required /></p>

              <p><TextField style={{width:"90%"}}   onBlur={handleBlur}
                  label="Password"
                  type="password"
                  name="password"
                  required
              /></p>

              <p><TextField style={{width:"90%"}}   onBlur={handleBlur}
                  label="Confirm Password"
                  type="password"
                  name="confirm-password"
                  required
              /></p>
              <p><small><input style={{width:"90%"}}   className="dual-btn" type="submit" value="Create an account" /></small></p>
              <p><small>{newUser ? "Already have an account?" : "Don't have an account?" }<Link style={{color:"rgb(250, 189, 36)"}} onClick={() => setNewUser(!newUser)} name="new-user">{newUser ? "Login" : "Create an account"}</Link></small></p>
              </div>
              : 
              <div className="input-form">
                  <h3 style={{textAlign:'start', marginLeft:'20px'}}>Log in</h3>
                  <p><TextField style={{width:"90%"}} onBlur={handleBlur} name="email" label="Username or Email" required /></p>
                  <p><TextField style={{width:"90%"}}  onBlur={handleBlur}
                      label="Password"
                      type="password"
                      name="password"
                      required
                  /></p>
                  <p><small><input type="checkbox"/> <label>Remember Me</label> <Link onClick={() => resetPassword(user.email)} style={{color:"rgba(39, 90, 83, 1)",fontWeight:'bold', marginLeft:'35%'}}> Forget password</Link></small></p>
                  <p><small><input style={{width:"90%"}}   className="dual-btn" type="submit" value="Log in" /></small></p>
                  <p><small>{newUser ? "Already have an account?" : "Don't have an account?" }<Link style={{color:"rgba(39, 90, 83, 1)", fontWeight:'bold'}} onClick={() => setNewUser(!newUser)} name="new-user"> {newUser ? "Login" : " Create an account"}</Link></small></p>
              </div>
          }
          </form>
          <p style={{marginTop:'10px'}}><small>Or</small></p>
          <button className="alt-btn" onClick={fbSignIn}><img src={fbLogo} alt=""/> <small style={{marginRight:'30%'}}>Continue with Facebook</small></button>
          <br/>
          <button className="alt-btn" onClick={googleSignIn}><img src={googleLogo} alt=""/> <small style={{marginRight:'30%'}}>Continue with Google</small></button>

          <p style={{color:'red'}}>{user.error} </p>
      </div>
    </div>
  );
}

export default Login;