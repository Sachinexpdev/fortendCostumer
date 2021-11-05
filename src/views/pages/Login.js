import React from "react";
import Header from "../components/AuthComponents/Header";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import Loader from "../../assets/img/loader";

import Cookies from 'universal-cookie';
import BASE_URL from './base';
import { toastr } from "react-redux-toastr";
import $ from "jquery";
import GoogleLogin from 'react-google-login';
import { signInWithGoogle } from "../components/SocialLogin";

// *****google login******
const axios = require('axios')


function Login() {

  // const googleResponse = async (response) => {
  //   alert(response.accessToken)
  //   let res = await axios.post(
  //     "http://127.0.0.1:8000/user/authorize/rest-auth/google/",
  //     {
  //       access_token: response.accessToken,

  //     }
  //   );
  //   console.log(res);
  //   window.location.href='home/';
  //   // return await res.status;
  // };

  const cookies = new Cookies();

  const axios = require('axios');
  console.log(cookies.get('email'));

  async function MyOne(e) {
    // debugger

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // cookies.set('uuid',email,{path:'/'});


    e.preventDefault();
    try {
      $(".laoder").show();
      console.log('Trying');
      let res = await axios.post(BASE_URL + 'user/authorize/', {

        email: email,
        password: password,
      })
      if (res.status === 200) {
        // debugger
        toastr.success('Log in Success!');


        console.log(res.data)
        cookies.set('uuid', res.data.uuid, { path: '/' });
        cookies.set('email', res.data.results.email, { path: '/' });
        cookies.set('city', res.data.results.city, { path: '/' });
        cookies.set('gender', res.data.gender, { path: '/' });
        cookies.set('user_fullname', res.data.first_name + ' ' + res.data.last_name, { path: '/' });
        setTimeout(function () {
          window.location = '/Home';
        }, 3000);

      }
    }
    catch (err) {
      console.error(err);
      $(".laoder").hide();
      // alert('Login unsuccessfull.');

      toastr.error('Log in Unsuccessful!');
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }

  return (
    <>

      <div className="login lg-2">
        {/* *****LOADER TOSTAR*****  */}


        <Header text="Don't have an account?"
          link="/" displayLink="SignUp" />

        <div className="login-body">
          <div class="laoder loader_login l-login"> <img src={Loader} /></div>

          <form>
            <h2>Log In</h2>

            <input type="email" id='email' placeholder="Email" />
            <input type="password" id='password' placeholder="Password" />
            <input type="submit" onClick={MyOne} value="Log in" className="sign-in-button" />

            <div className="or">
              <span className="left-bar"></span>
              <p>or</p>
              <span className="right-bar"></span>
            </div>

            <input
              type="submit"
              value="Log in with Google"
              onClick={signInWithGoogle}
              className="sign-in-button-with-google"
            />

            <p className="link-area">
              Don't have an account? <Link to="/">sign up</Link>
            </p>
          </form>



        </div>
      </div>
    </>
  );
}




export default Login;
