import React,{ useEffect, useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import MenuIcon from "@material-ui/icons/Menu";
import { HandleSidebar } from "../../../assets/js/Events/HandleSideBar";
import { Link, NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';
// import BASE_URL from './base';
import axios from 'axios';
import BASE_URL from "../../pages/base";
// import Header from './src/components/HomeComponents/Header';

const cookies = new Cookies();

function Header() {
  const [isActive, setActive] = useState("false");
  const [getgym,setgym] = useState([])

  const handleToggle = () => {
    setActive(!isActive);
  };

    useEffect(() => {
        axios
        .get(BASE_URL + 'user/select/gym/?uuid='+cookies.get('uuid'))
        .then(res => {
          console.log(res)
          setgym(res.data.context)
        })
        .catch(err => {
          // console.log(err)
        })
      }, [])


      function Choosegym(data,theme){
        // debugger
        cookies.set('gym_id',data,{path:'/'});
        cookies.set('theme',theme,{path:'/'});
        console.log(cookies.get('gym_id'));
        window.location.href='/dashboard'
    }

      // var user = cookies.get('user_fullname');

      
  return (
    <div className="Header-Home">
    <div className="min">
      <div className="tab">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61.915"
          height="34.594"
          viewBox="0 0 61.915 34.594">
          <g
            id="Floey_Logo_Black"
            data-name="Floey Logo Black"
            transform="translate(0 -0.048)">
            <path
              id="Path_90"
              data-name="Path 90"
              d="M528.12,533.53"
              transform="translate(-520.689 -505.028)"
              fill="#fff"
            />
            <path
              id="Path_91"
              data-name="Path 91"
              d="M455.909,218.047a1.394,1.394,0,0,0-.352-.725,1.471,1.471,0,0,0-.208-.185,4.165,4.165,0,0,0-1.362-.608,6.834,6.834,0,0,0-1.6-.247c-.09,0-.179,0-.269,0a6.628,6.628,0,0,0-2.648.533,6.84,6.84,0,0,0-2.153,1.448,7.164,7.164,0,0,0-1.468,2.135,6.652,6.652,0,0,0-.59,2.586V242.3a1.41,1.41,0,1,0,2.82,0V229.955h3.485a1.388,1.388,0,0,0,.987-.4,1.294,1.294,0,0,0,.42-.972,1.337,1.337,0,0,0-.42-1.01,1.387,1.387,0,0,0-.987-.4H448.08v-4.421a4.018,4.018,0,0,1,1.3-2.63,3.883,3.883,0,0,1,2.743-1.067,4.086,4.086,0,0,1,1.062.141,4.46,4.46,0,0,1,.758.321,1.4,1.4,0,0,0,.791.121,1.292,1.292,0,0,0,.914-.538,1.345,1.345,0,0,0,.266-1.053"
              transform="translate(-445.26 -216.23)"
              fill="#fff"
            />
            <path
              id="Path_92"
              data-name="Path 92"
              d="M563.38,302.883V284.238a1.418,1.418,0,1,1,2.836,0v18.645a1.418,1.418,0,1,1-2.836,0Z"
              transform="translate(-552.786 -276.804)"
              fill="#fff"
            />
            <path
              id="Path_93"
              data-name="Path 93"
              d="M625.94,369.029a7.189,7.189,0,1,1,7.189,7.189,7.189,7.189,0,0,1-7.189-7.189Zm2.836,0a4.353,4.353,0,1,0,4.353-4.353A4.353,4.353,0,0,0,628.776,369.029Z"
              transform="translate(-609.735 -348.737)"
              fill="#fff"
            />
            <path
              id="Path_94"
              data-name="Path 94"
              d="M832.2,369.034a1.412,1.412,0,0,1-1.435,1.4h-9.877a4.364,4.364,0,0,0,4.126,2.95,5.623,5.623,0,0,0,3.206-.945,1.369,1.369,0,0,1,1.89.659,1.489,1.489,0,0,1-.687,1.89,7.015,7.015,0,0,1-4.411,1.232,7.189,7.189,0,1,1,0-14.378A7.056,7.056,0,0,1,832.2,369.034ZM820.885,367.6h8.276a4.189,4.189,0,0,0-4.153-2.921A4.377,4.377,0,0,0,820.885,367.6Z"
              transform="translate(-784.406 -348.741)"
              fill="#fff"
            />
            <path
              id="Path_95"
              data-name="Path 95"
              d="M1018.457,364.768v14.12a5.913,5.913,0,0,1-11.227,2.581,1.408,1.408,0,0,1,.659-1.891,1.392,1.392,0,0,1,1.862.659,3.116,3.116,0,0,0,2.78,1.717,3.073,3.073,0,0,0,3.1-3.067v-2.063a5.689,5.689,0,0,1-2.95.8,5.764,5.764,0,0,1-5.757-5.7v-7.161a1.4,1.4,0,0,1,2.806,0v7.1a2.95,2.95,0,1,0,5.9,0v-7.1a1.418,1.418,0,0,1,2.835,0Z"
              transform="translate(-956.546 -350.146)"
              fill="#fff"
            />
          </g>
        </svg>
        
      </div>
   
      
      {/* {getgym.map(data=>(
      <div className="header-gym-btn-main-2">
        <a href='/Dashboard'><button onClick={()=>Choosegym(data.gym)}
        className="btn-gym-2"> {data.gym_initial} </button></a>
      </div>))} */}

      
          {getgym.map((data,index)=>{
            return  <div className="pro-btn-m" style={{zIndex:887-index}}>
            {/* if(data.gym!==cookies.get('gym_id')){ */}
          <NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/Home">
          {data.gym_initial}
          </NavLink>
          </div>
          {/* } */}
          })}
          

         {/* <div className="header-gym-btn-main">
        <a href='/dashhome'><button className="btn-gym-1" > F </button></a>
    </div> */}
               
      </div>
      
      <div className="profile-area">
        {/* <div className="profile-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15.014"
            viewBox="0 0 16 15.014">
            <path
              id="Path_8"
              data-name="Path 8"
              d="M14,11.25A14.37,14.37,0,0,0,9.48,9.19a10.46,10.46,0,0,0,1.38-2.75A6.27,6.27,0,0,0,11,4.38a9.15,9.15,0,0,0,0-2.1A2.77,2.77,0,0,0,8,0,2.78,2.78,0,0,0,5,2.28a10.47,10.47,0,0,0,0,2.1,5.34,5.34,0,0,0,.22,2.06A9.13,9.13,0,0,0,6.48,9.19,14.77,14.77,0,0,0,2,11.25c-2,.94-2,2-2,2v.4A1.54,1.54,0,0,0,1.46,15H14.52A1.46,1.46,0,0,0,16,13.57v-.34S16,12.19,14,11.25Z"
              transform="translate(0 0.013)"
              fill="#7966ff"
              fill-rule="evenodd"
            />
          </svg>

          <h5><a href='/profile'>Profile</a></h5>

        </div> */}
        <div className="profile-presentation">
        <NavLink className="zind-9" to="/profile">
          <img src={ProfilePic} />
          </NavLink>
          
          <div className="profile-name">
            <span>{cookies.get('user_fullname')}</span>
            <span>{cookies.get('email')}</span>
          </div>
        </div>

        
        
        <div className="set-mn">
        
        <div className="set-drop">
          <ul>
            <li>
              <NavLink to="/profile"> Profile </NavLink>
            </li>
          </ul>
        </div>
        
        </div>

      
       

        <div className="notif-d-main">


        <svg
          onClick={handleToggle}
          className="header-nofication-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="25.5"
          height="28.5"
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
       

        <div className={isActive ? "notifi-d-102 " : "notifi-d-102 open-drop"}>
             
             <ul className="header-notifi-ul">
               <li>
                 <div className="notifi-left-img">
                   {/* <img src="assets/images/3.jpg" /> */}
                 </div>
                 <div className="notifi-right-cont-1">
                  <div className="noti-text-1">
                    <p className="p1"> Golden gym </p>
                    <p className="p2"> Aug 20,2021 </p>
                  </div>
                  <div className="notifi-text-2">
                    <p> <span>  Class Booked : </span> Abdominal Crunches </p>
                  </div>
                 </div>
               </li>

               

              
             </ul>
           </div>
        </div>


      </div>
      
      <div className="mobile-version-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.278"
          height="21.5"
          viewBox="0 0 19.278 21.5">
          <g
            id="Bell_Icon"
            data-name="Bell Icon"
            transform="translate(-1869.812 -36.961)">
            <path
              id="Icon_awesome-bell"
              data-name="Icon awesome-bell"
              d="M8.889,20a2.52,2.52,0,0,0,2.538-2.5H6.35A2.52,2.52,0,0,0,8.889,20Zm8.547-5.848c-.767-.811-2.2-2.031-2.2-6.027a6.2,6.2,0,0,0-5.077-6.061V1.25a1.269,1.269,0,0,0-2.538,0v.814A6.2,6.2,0,0,0,2.543,8.125c0,4-1.435,5.216-2.2,6.027A1.21,1.21,0,0,0,0,15a1.261,1.261,0,0,0,1.274,1.25H16.5A1.261,1.261,0,0,0,17.778,15a1.209,1.209,0,0,0-.342-.848Z"
              transform="translate(1870.563 37.711)"
              fill="none"
              stroke="#7966ff"
              stroke-width="1.5"
            />
            <g
              id="Ellipse_16"
              data-name="Ellipse 16"
              transform="translate(1882.432 39.933)"
              fill="rgba(255,0,0,0.69)"
              stroke="#f8f8f8"
              stroke-width="1">
              <circle cx="2.222" cy="2.222" r="2.222" stroke="none" />
              <circle cx="2.222" cy="2.222" r="1.722" fill="none" />
            </g>
          </g>
        </svg>
        <div
          className="menu-icon"
          onClick={(e) =>
            HandleSidebar(document.querySelector(".HomeSideBar"))
          }>
          <svg
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
        </div>
      </div>
    </div>
  );
}

export default Header;
