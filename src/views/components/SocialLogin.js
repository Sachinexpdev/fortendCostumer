
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

import Cookies from "universal-cookie";
import BASE_URL from "../pages/base";
const cookies = new Cookies();


firebase.initializeApp({
    apiKey: "AIzaSyCVEg6iuw28eoH89mPMff76137Baag-I10",
    authDomain: "gymproject-6a68e.firebaseapp.com",
    projectId: "gymproject-6a68e",
    storageBucket: "gymproject-6a68e.appspot.com",
    messagingSenderId: "396896174426",
    appId: "1:396896174426:web:ff4701ea945af6b1763363",
    measurementId: "G-MX7023R3D9"
});

function SocialSignin(data){
  var url = BASE_URL+'user/social_login/';
  axios.post(url,data).then(re=>{
      console.clear()
      alert(re.data.message)
      // console.log(re.data)
      // cookies.set('logintoken', re.data.data.access, { path: '/' }) 
      window.location = "/"
  }).catch(err=>{
      alert(err)
  })
}

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  
  auth.signInWithPopup(googleProvider).then((res) => {
      console.clear()
    var data = {
        social_id:res.user.uid,
        displayName:res.user.displayName,
        email:res.user.email,
        profile_image:res.user.photoURL,
        mobile:res.user.phoneNumber
    }
    console.log(data)
    SocialSignin(data)
    
  }).catch((error) => {
    console.log(error.message)
  })
}

