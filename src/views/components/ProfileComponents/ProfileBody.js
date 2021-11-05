import React, { useEffect,useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import HeaderF from "../../../assets/img/f.svg";
import Cookies from 'universal-cookie';
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../pages/base";
import { toastr } from "react-redux-toastr";
import ImageUploader from 'react-images-upload';

const cookies = new Cookies();
function ProfileBody() {

  const [pictures, setPictures] = useState([])

  const [blog3, setblog3] = useState([])

  function onDrop(picture){
    // setPictures([])
    setPictures([picture]);
}

useEffect(() => {
  
axios
  .get(BASE_URL + 'user/' + cookies.get('uuid'))
  .then(getuuid => {

    setblog3(getuuid.data);
    // 
    setPictures([getuuid.data.profile_picture])
    cookies.set('user_fullname',getuuid.data.first_name+' '+getuuid.data.last_name)
  })

  .catch(err => {
    console.log(err);
  })
}, [])

function Update_Profile(){
    
  toastr.info('updating profile');
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  
  var profile_pic = pictures[0];
  if(first_name=='' || last_name=='' || email=='' || mobile=='') 
  {return toastr.info('Enter all required values')}
  debugger
  console.log(pictures[0])
  var data = new FormData();
      data.append('first_name', first_name);
      data.append('last_name', last_name);
      data.append('email', email);
      data.append('phone_number', mobile);
      
      
      // data.append('profile_picture', profile_pic);
  try{
    
    
    console.log('Trying');
    var config = {
      method: 'patch',
      url: BASE_URL+'user/'+cookies.get('uuid')+'/',
      headers: { 
        'content-type': `multipart/form-data; boundary=${data._boundary}`,
      },
      data : data
    };
    
    axios(config)
    .then(function (res) {
      
      toastr.success(res.data.message);
      // if 
      cookies.set('first_name',first_name,{path:'/'});
      cookies.set('last_name',last_name,{path:'/'});
     
      
    })
    .catch(err=>{
      toastr.error(err);
      
    }) 
  }
  catch (err){
    // alert("Error Please Try Again");
    toastr.error(err);
    
  }

}

const [getgym1,setgym1] = useState([])
useEffect(() => {
  axios
  .get(BASE_URL + 'user/select/gym/?uuid='+cookies.get('uuid'))
  .then(res => {
    console.log(res)
    setgym1(res.data.context)
  })
  .catch(err => {
    // console.log(err)
  })
}, [])


// function Choosegym(data,theme){
    
//     cookies.set('gym_id',data,{path:'/'});
//     cookies.set('theme',theme,{path:'/'});
//     console.log(cookies.get('gym_id'));
//     window.location.href='/dashboard'
// }

  return (
    <div className="ProfileBody">
      <div className="profile-body-header">
        <div className="profile-label">
          <p>Profile</p>
          <NavLink className="zind-9" to="/Home">
          <img src={HeaderF} />
          </NavLink>
        </div>
        {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return<div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/dashboard">
          {data.gym_initial}
          </NavLink></div>
          
}
          })}
          </div> */}
          

        <div className="profile-area">
          <div className="profile-presentation">
            <img src={ProfilePic} />
            <div className="profile-name">
              <span>{blog3.first_name?blog3.first_name+' '+blog3.last_name:cookies.get("user_fullname")}</span>
              <span>{cookies.get('email')}</span>
            </div>
          </div>
          {/* <span className="language">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.452"
              height="18.5"
              viewBox="0 0 24.452 24.5">
              <g
                id="fcb585d9a7c6fd63dc7aead816a01339"
                transform="translate(-10.002 -9.034)">
                <g
                  id="Group_347"
                  data-name="Group 347"
                  transform="translate(10.003 9.034)">
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M23.079-501.936a12.633,12.633,0,0,1,4,.971,11.876,11.876,0,0,1,3.807,2.6,12.173,12.173,0,0,1,3.507,7.154,17.68,17.68,0,0,1,0,3,12.318,12.318,0,0,1-4.457,8.034,12.415,12.415,0,0,1-9.73,2.546,12.274,12.274,0,0,1-9.65-8.374,11.416,11.416,0,0,1-.55-3.707,11.531,11.531,0,0,1,1.366-5.628,12.278,12.278,0,0,1,8.82-6.448A12.962,12.962,0,0,1,23.079-501.936Zm-.41,1.026c0,.09-.01,1.206-.015,2.476l-.01,2.316h2.171a19.527,19.527,0,0,0,2.166-.05,16.568,16.568,0,0,0-.805-1.916,15.719,15.719,0,0,0-1.586-2.566l-.2-.255-.54-.06c-.3-.035-.58-.07-.62-.08s-.18-.015-.315-.02C22.684-501.071,22.679-501.071,22.669-500.911Zm-1.816-.105c-.39.045-.465.07-.565.185a20.809,20.809,0,0,0-1.621,2.586,14.659,14.659,0,0,0-.89,2.076,14.976,14.976,0,0,0,2.026.05h2.026v-4.953h-.265C21.424-501.071,21.1-501.046,20.853-501.016Zm-2.386.575a13.291,13.291,0,0,0-2.141,1.005,12.831,12.831,0,0,0-3.1,2.767c-.175.235-.34.455-.365.485a7.706,7.706,0,0,0,1.976.065h2.021l.22-.59a17.075,17.075,0,0,1,1.711-3.422,5.118,5.118,0,0,0,.29-.465C19.077-500.646,18.987-500.621,18.467-500.441Zm7.484.33a17.667,17.667,0,0,1,1.681,3.3l.265.69h1.871c1.025,0,1.866-.01,1.866-.015a12.44,12.44,0,0,0-.905-1.166,11.507,11.507,0,0,0-4.472-3.067C25.651-500.591,25.641-500.581,25.951-500.111Zm2.231,4.863c0,.015.07.3.15.64a20.8,20.8,0,0,1,.55,3.8,4.26,4.26,0,0,0,.03.5l.035.19h2.321a8.809,8.809,0,0,0,2.346-.075,8.642,8.642,0,0,0-.21-1.771,12.276,12.276,0,0,0-1.1-3.092l-.125-.215h-2C29.083-495.268,28.182-495.258,28.182-495.248Zm-5.528,2.541v2.566l2.711.015,2.716.01v-.285a21.228,21.228,0,0,0-.7-4.512l-.105-.355H22.649Zm-5.228-2.536c0,.01-.08.33-.175.71a20.227,20.227,0,0,0-.575,4.022v.4l2.561-.01,2.566-.015.015-2.566.01-2.561h-2.2C18.417-495.268,17.426-495.258,17.426-495.243Zm-5.443.61a11.769,11.769,0,0,0-1.111,4.277v.24h4.943l.03-.365c.015-.2.04-.575.055-.835a19.523,19.523,0,0,1,.505-3.2c.1-.4.17-.725.17-.735s-.966-.02-2.141-.02H12.289ZM28.913-489c-.015.175-.04.55-.055.84a18.9,18.9,0,0,1-.505,3.247c-.1.4-.17.725-.17.735s.9.02,2,.02h2l.135-.225a11.781,11.781,0,0,0,1.091-3.026,9.21,9.21,0,0,0,.21-1.831,9.708,9.708,0,0,0-2.351-.07H28.943Zm-6.263,2.276,0,2.566h4.632l.105-.355a21.229,21.229,0,0,0,.7-4.512v-.285l-2.716.01-2.711.015Zm-5.973-2.191a20.206,20.206,0,0,0,.575,4.022c.1.38.175.7.175.71s.991.025,2.2.025h2.2V-486.7c0-1.4-.015-2.561-.035-2.576s-1.176-.035-2.576-.035H16.676v.4Zm-5.788.09a11.474,11.474,0,0,0,.6,2.892,12.993,12.993,0,0,0,.69,1.616l.11.185,2.141-.015c1.181-.005,2.146-.02,2.146-.035s-.075-.33-.17-.71a20.609,20.609,0,0,1-.53-3.617c0-.15-.015-.4-.03-.54l-.035-.26H10.858ZM27.582-482.5a21.205,21.205,0,0,1-1.5,3.037,4.242,4.242,0,0,0-.33.59,10.619,10.619,0,0,0,1.606-.65,11.219,11.219,0,0,0,3.5-2.736,9.677,9.677,0,0,0,.751-.991,7.4,7.4,0,0,0-1.836-.06H27.9Zm-4.932,1.661c0,1.361.02,2.486.035,2.506a8.666,8.666,0,0,0,1.426-.13l.31-.055.34-.47a15.918,15.918,0,0,0,1.366-2.266,17.436,17.436,0,0,0,.856-2,14.787,14.787,0,0,0-2.166-.055H22.649v2.472Zm-4.873-2.416a13.989,13.989,0,0,0,.775,1.871,11.988,11.988,0,0,0,1.9,2.951,10.119,10.119,0,0,0,1.331.1c.025-.02.045-1.02.045-2.506v-2.471H19.8A12.71,12.71,0,0,0,17.777-483.257Zm-4.878.08a12.067,12.067,0,0,0,2.151,2.306,12.173,12.173,0,0,0,2.566,1.581,14.152,14.152,0,0,0,1.466.53c.025,0-.06-.165-.2-.365a17,17,0,0,1-1.741-3.427l-.29-.76H12.814Z"
                    transform="translate(-10.002 501.966)"
                    fill="#7966ff"
                  />
                </g>
              </g>
            </svg>
          </span> */}

          <svg
            className="burger-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="19"
            viewBox="0 0 27 19">
            <g id="Menu" transform="translate(-17 -21)">
              <rect
                id="Rectangle_180"
                data-name="Rectangle 180"
                width="27"
                height="3"
                rx="1.5"
                transform="translate(17 21)"
                fill="#7966ff"
              />
              <rect
                id="Rectangle_181"
                data-name="Rectangle 181"
                width="27"
                height="3"
                rx="1.5"
                transform="translate(17 29)"
                fill="#7966ff"
              />
              <rect
                id="Rectangle_182"
                data-name="Rectangle 182"
                width="27"
                height="3"
                rx="1.5"
                transform="translate(17 37)"
                fill="#7966ff"
              />
            </g>
          </svg>

          {/* <svg
            className="header-setting-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 26 26">
            <g
              id="Settings_Icon"
              data-name="Settings Icon"
              transform="translate(-0.75 -0.75)">
              <path
                id="Path_15"
                data-name="Path 15"
                d="M20.182,16.841A3.341,3.341,0,1,1,16.841,13.5,3.341,3.341,0,0,1,20.182,16.841Z"
                transform="translate(-3.091 -3.091)"
                fill="none"
                stroke="#7966ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Path_16"
                data-name="Path 16"
                d="M21.991,17.091a1.837,1.837,0,0,0,.368,2.027l.067.067a2.229,2.229,0,1,1-3.152,3.152l-.067-.067a1.852,1.852,0,0,0-3.14,1.314v.189a2.227,2.227,0,0,1-4.455,0v-.1a1.837,1.837,0,0,0-1.2-1.682,1.837,1.837,0,0,0-2.027.367l-.067.067a2.229,2.229,0,1,1-3.152-3.152l.067-.067a1.852,1.852,0,0,0-1.314-3.14H3.727a2.227,2.227,0,0,1,0-4.455h.1a1.837,1.837,0,0,0,1.682-1.2,1.837,1.837,0,0,0-.367-2.027l-.067-.067A2.229,2.229,0,1,1,8.226,5.164l.067.067A1.837,1.837,0,0,0,10.32,5.6h.089a1.837,1.837,0,0,0,1.114-1.682V3.727a2.227,2.227,0,0,1,4.455,0v.1a1.852,1.852,0,0,0,3.14,1.314l.067-.067a2.229,2.229,0,1,1,3.152,3.152l-.067.067A1.837,1.837,0,0,0,21.9,10.32v.089a1.837,1.837,0,0,0,1.682,1.114h.189a2.227,2.227,0,0,1,0,4.455h-.1a1.837,1.837,0,0,0-1.682,1.114Z"
                fill="none"
                stroke="#7966ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
          </svg> */}
          <svg
            className="header-nofication-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18.5"
            height="21.5"
            viewBox="0 0 25.5 28.5">
            <g
              id="Bell_Icon"
              data-name="Bell Icon"
              transform="translate(-1869.812 -36.961)">
              <path
                id="Icon_awesome-bell"
                data-name="Icon awesome-bell"
                d="M12,27a3.4,3.4,0,0,0,3.427-3.375H8.573A3.4,3.4,0,0,0,12,27Zm11.539-7.895c-1.035-1.095-2.972-2.742-2.972-8.136a8.363,8.363,0,0,0-6.854-8.182v-1.1a1.713,1.713,0,0,0-3.426,0v1.1a8.363,8.363,0,0,0-6.854,8.182c0,5.395-1.937,7.042-2.972,8.136A1.634,1.634,0,0,0,0,20.25a1.7,1.7,0,0,0,1.72,1.688H22.28A1.7,1.7,0,0,0,24,20.25a1.633,1.633,0,0,0-.461-1.145Z"
                transform="translate(1870.563 37.711)"
                fill="none"
                stroke="#7966ff"
                stroke-width="1.5"
              />
              <g
                id="Ellipse_16"
                data-name="Ellipse 16"
                transform="translate(1886.587 40.711)"
                fill="rgba(255,0,0,0.69)"
                stroke="#f8f8f8"
                stroke-width="1">
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="profile-information">
        <form className="profile-form">
          {/* <div
            className="profile-img"
            style={{ backgroundImage: `url(${ProfilePic})` }}>
          </div> */}

          <div className="coose-profile-d choos-img-dm">
            <ImageUploader
                withIcon={false}
                buttonText='Choose images'
                onChange={onDrop}
                // imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
          </div>

          <div className="personal-information">
            <h2 className="main-heading">Personal Information</h2>
            <div className="input-collection">
              <div className="input-wrapper">
                <label>First Name</label>
                <input type="text" id="first_name" placeholder="First Name" defaultValue={blog3.first_name}/>
              </div>
              <div className="input-wrapper">
                <label>Last Name</label>
                <input type="text" id="last_name" placeholder="Last Name" defaultValue={blog3.last_name}/>
              </div>

              <div className="input-wrapper email-input-wrapper">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  disabled
                  id="email"
                  value={blog3.email}
                />
              </div>

              {/* <div className="input-wrapper password-input-wrapper">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue={blog3.password.slice(0,8)}
                />
              </div> */}

              <div className="input-wrapper">
                <label>Phone Number</label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="Phone Number"
                  defaultValue={blog3.phone_number}
                />
              </div>
            </div>
          </div>
          <div className="emergency-contact">
            <h2 className="main-heading">Emergency Contact</h2>
            <div className="input-collection">
              <div className="input-wrapper">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-wrapper">
                <label>Mobile</label>
                <input type="text" placeholder="Mobile"  />
              </div>
            </div>
          </div>

          <div className="save-btn-wrapper">
            <button onClick={()=>Update_Profile()}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileBody;
