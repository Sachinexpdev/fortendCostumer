import React from "react";
import Header from "../components/AuthComponents/Header";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import Loader from "../../assets/img/loader";

import Cookies from 'universal-cookie';
import BASE_URL from './base';
import { toastr } from "react-redux-toastr";
import $ from "jquery";


function SignUp() {

  const axios = require('axios');
  const cookies = new Cookies();

async function Myone(e) {
 
// debugger
  // var form = document.forms["myForm"]["email"].value;   
  var role = 'Customer';
  // var username = document.forms["myForm"]["username"].value;
  // var username = document.getElementById('username').value;
  var first_name = document.getElementById('fname').value;
  var last_name = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  // var city = document.getElementById('city').value;
  var password = document.getElementById('password').value;
  var password1 = document.getElementById('password1').value;
  // var password = '1234';
  // var password1 = '1234';

  cookies.set('email',email,{path:'/'});
  console.log(cookies.get('email'));
  if (password !== password1) {
      alert('Passwords do not match.');
  }
  else {  
     
      console.log('Trying to send request');
      e.preventDefault();
      try {
        $(".laoder").show();
          // alert('err')
          // let loader = `<div><div class="loader centered"/></div>`;
          // document.getElementById('trial').innerHTML = loader;
          console.log('Trying')
          let res = await axios.post(BASE_URL + 'user/', {
              role : role,
              // username:username,
              first_name: first_name,
              last_name: last_name,
              email: email,
              phone_number: mobile,
              dob:dob,
              // address:city,
              gender:gender,
              password: password,
          })
          
          if (res.status === 200) {

              // test for status you want, etc
              console.log(res.status);
              console.log(res.data);
              // alert(res.data.message);
              // alert('singup have sucessfully done');

              toastr.success('Signup in Success!')
              setTimeout(function () {
              window.location='auth/sign-in';
            }, 3000);

          }
          // Don't forget to return something
          return res.data
      }
      catch (err) {
        $(".laoder").hide();
          // console.error('Signup Failed , Please try again.');
          toastr.error('Signup Failed , Please try again.');
          setTimeout(function () {
            window.location.reload();
			}, 3000);
          // alert(err)
      }
  }
}

  return (
    <div className="login">
   
      <Header
        text="Already have an account?" 
        link="/auth/sign-in/"
        displayLink="LogIn"
      />
      <div className="login-body">
      <div class="laoder loader_login l-login"> <img src={Loader} /></div>
        <form>
          <h2>Sign Up</h2>

          {/* <input type="text" id='username' placeholder="Username" /> */}
          <input type="text" id='fname' placeholder="First Name" />
          <input type="text" id='lname' placeholder="Last Name" />
          <input type="email" id='email' placeholder="Email" />
          <input type="text" id='mobile' placeholder="mobile" />
          <input type="date" id='dob' class="inp-date" placeholder="Date Of Birth"/>
           <select id="gender" name="gender" class="inp-select" >
                        <option>Male </option>
                        <option>Female </option>
                        </select>

                        {/* <select id="city" name="gender" class="inp-select" >
                        <option>Indore </option>
                        <option>Mumbai </option>
                        <option>Kolkata </option>
                        <option>Delhi </option>
                        </select>
   */}
          <input type="password" id='password'  placeholder="Password" />
          <input type="password" id='password1' placeholder="Confirm Password" />

      
          <input type="submit" onClick={Myone} value="Sign up" className="sign-in-button" />

          {/* <div className="or">
            <span className="left-bar"></span>
            <p>or</p>
            <span className="right-bar"></span>
          </div>
          <input
            type="submit"
            value="Sign in with Google"
            onClick={signInWithGoogle}
            className="sign-in-button-with-google"
          /> */}

          <p className="link-area">
            Already a member? <Link to="/auth/sign-in">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
