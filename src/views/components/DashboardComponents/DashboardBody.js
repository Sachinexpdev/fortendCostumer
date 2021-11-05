import React, { useEffect, useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import HeaderF from "../../../assets/img/f.svg";

import DashboardListDot from "../../../assets/img/dashboard-list-dot.svg";
import LeftBoxArrow from "../../../assets/img/left-dashboard-package-arrow.svg";
import RightBoxArrow from "../../../assets/img/right-dashboard-package-arrow.svg";
import ThirdPlanBox from "./ThirdPlanBox";
import DashboardCard from "./DashboardCard";
import { Calender } from "../../../assets/js/Events/DashboardCalender";
import FirstPlanBox from "./FirstPlanBox";
import { Link, NavLink } from "react-router-dom";

import Cookies from 'universal-cookie';
import axios from 'axios';
import BASE_URL from "../../pages/base";

import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import BoxThree from "./BoxThree";

const cookies = new Cookies();

function get_date(dt){
 

  //  ***Date Month Functions***
  console.log(dt)
  // alert(dt)
  var date_parts = dt.split('/');
  // var month_parth = dt.split('/ ')
  var dx = new Date(date_parts[2],date_parts[1]-1,date_parts[0]);
  
  // console.log(dx)
  dx = dx.toString().split(' ')
  return dx[0]+' '+dx[1]+' '+dx[2]+' ,'+dx[3] ;

}
function get_date_booked(dt){
 

  //  ***Date Month Functions***
  
  console.log(dt)
  
  var date_parts = dt.split(' ');
  
  return date_parts[0]+' '+date_parts[1];

}

function DashboardBody() {
const [isActive, setActive] = useState("false");

  
const [getgym,setgym] = useState([])


const handleToggle = () => {
  setActive(!isActive);
};

  // useEffect(() => {
  //   axios
  //   .get(BASE_URL + 'gymprofile/gym/' + cookies.get('gym_id'))
  //   .then(res => {
  //     console.log(res)
  //     setgym(res.data)
  //   //   console.log(getgym[0].gym_name)
  //   })
  //   .catch(err => {
  //     // console.log(err)
  //   })
  // }, [])

  // ==================================

  const [TrackPlanBox, setTrackPlanBox] = useState(1);
  useEffect(() => {
    Calender();
  }, []);

  // ================BOOK CLASS================

  const [getbookclass,setbookclass] = useState([])
  const [getupcomingbookclass,setupcomingbookclass] = useState([])
  const [packages, setPackage] = useState({})
  const [blog3, setblog3] = useState([])
  
  useEffect(() => {
    axios
    .get(BASE_URL + 'user/home/user_profile/?uuid=' +cookies.get('uuid')+'&gym_id='+ cookies.get('gym_id'))
    .then(res => {
      console.log(res)
      setgym(res.data.gym_data)
      setblog3(res.data.histories)
      setupcomingbookclass(res.data.class_data)
      setbookclass(res.data.current);
    //   console.log(getgym[0].gym_name)
    })
    .catch(err => {
      // console.log(err)
    })
  }, []) 
    
    // useEffect(() => {
    //     axios
    //     .get(BASE_URL + 'user/bookclass/list/?uuid=' +cookies.get('uuid') + '&gym_id='+ cookies.get('gym_id') )
    //     .then(getuuid => {
    //         // console.log(getuuid);
    //         setbookclass(getuuid.data);
    //     })

    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])


    // useEffect(() => {
    //     axios
    //     .get(BASE_URL + 'user/upcomingclass/list/?uuid=' +cookies.get('uuid') + '&gym_id='+ cookies.get('gym_id') )
    //     .then(getuuid => {
    //         // console.log(getuuid);
    //         setupcomingbookclass(getuuid.data);
    //     })

    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])
    

  // ============BookCourse============
  
  const [getbookcourse,setbookcourse] = useState([])
  const [getupcomingbookcourse,setupcomingbookcourse] = useState([])
    
    
    // useEffect(() => {
    //     axios
    //     .get(BASE_URL + 'user/bookcourse/list/?uuid=' +cookies.get('uuid') + '&gym_id='+ cookies.get('gym_id') )
    //     .then(getuuid => {
    //         // console.log(getuuid);
    //         setbookcourse(getuuid.data);
    //     })

    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])


    // useEffect(() => {
    //     axios
    //     .get(BASE_URL + 'user/upcomingcourse/list/?uuid=' +cookies.get('uuid') + '&gym_id='+ cookies.get('gym_id') )
    //     .then(getuuid => {
    //         // console.log(getuuid);
    //         setupcomingbookcourse(getuuid.data);
    //     })

    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])

    // ========SELECT GYM============

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
    //     // debugger
    //     cookies.set('gym_id',data,{path:'/'});
    //     cookies.set('theme',theme,{path:'/'});
    //     console.log(cookies.get('gym_id'));
    //     window.location.href='/dashboard'
    // }

// ============HISTORY==========================
    // useEffect(() => {
    // axios
    //   .get(BASE_URL + 'user/userhistory/' + cookies.get('uuid') + '/?gym_id=' + cookies.get('gym_id'))
    //   .then(getuuid => {

    //     console.log(getuuid);
    //     setblog3(getuuid.data);
    //   })

    //   .catch(err => {
    //     console.log(err);
    //   })
    // }, [])

    // ===========================

    

  return (
    <div className="DashboardBody">
      <div className="profile-body-header"> 
        <div className="profile-label">
          <p>{getgym.gym_name}</p> 

          <NavLink className="zind-9" to="/Home">
          <img src={HeaderF} />
          </NavLink>

          </div>

        {/* *********Choosegym-function********* */}

          {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return<div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/dashboard">
          {data.gym_initial}
          </NavLink></div>
          
}
          })}
          </div> */}
          {/* ***************closed***************/}

          

          
          {/* {getgym.map(data=>( */}
{/*           
          <div className="header-gym-btn-main-2">
        <a href='/Dashboard'><button className="btn-gym-2">  </button></a>
      </div> */}

      {/* <div className="rd-btn-main two">
      {getgym1.map(data=>(
      <div className="header-gym-btn-main-2">
        <a href='/Dashboard'><button onClick={()=>Choosegym(data.gym)}
        className="btn-gym-2"> {data.gym_initial} </button></a>
      </div>))}
      </div>  */}
          

        <div className="profile-area">
      
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

          <div className="profile-presentation set-mn" >
          <NavLink className="zind-9" to="/profile">
            <img src={ProfilePic} />
            </NavLink>
            <div className="profile-name ">
            <NavLink className="zind-9" to="/profile">
              <span>{cookies.get('user_fullname')}</span>
              <span>{cookies.get('email')}</span> 
              </NavLink>

              
            </div>
            <div className="set-drop">
              <ul>
                <li>
                  <NavLink to="/profile"><center> Profile </center></NavLink>
                </li>
                <li >
                  <NavLink className="logout-red" to="/auth/sign-in"><center> Log Out </center> </NavLink>
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
      </div>
      
      <div className="dashboard-information">
        <div className="col col1">
          <div className="col-1-presentation">
            <p>
              {/* Haraka is a health and wellness studio for women and girls from
              the age 4. We offer mat classes, reform and stability chair
              classes, barre workoutand yoga ….. */}
              {getgym.about}
              <span>
                {/* <a href="/Home">More info</a> */}
              </span>
            </p>

            <div className="hours">
              <h5>Hours</h5>
              <p>{getgym.gym_timings}</p>
            </div>
            <div className="tel">
              <h5>Tel</h5>
              <p>{getgym.contact_number}</p>
            </div>

            <div className="active-plan-ui">
                {/* <img
                  src={LeftBoxArrow}
                  className="box-arrow left-arrow"
                  onClick={(e) => {
                    if (TrackPlanBox > 1) {
                      setTrackPlanBox(TrackPlanBox - 1);
                    }
                  }}
                /> */}
              {/* <img
                src={RightBoxArrow}
                className="box-arrow right-arrow"
                onClick={(e) => {
                  if (TrackPlanBox < 3) {
                    setTrackPlanBox(TrackPlanBox + 1);
                  }
                }}
              /> */}
              <h2> Active Plans & Packages </h2>
               <FirstPlanBox plandetails={packages} />
              {/* {TrackPlanBox == 2 && <FirstPlanBox TrackPlanBox={2} />}
              {TrackPlanBox == 3 && <ThirdPlanBox TrackPlanBox={3} />} */}
            </div>
          </div>
        </div>
        <div className="col col2 s-2">
          <h2>Explore Classes</h2>

          <div className="sl-icn">
         <img
                src="assets/left-arrow.png"
                className="box-arrow left-arrow bx-1"
                onClick={(e) => {
                  if (TrackPlanBox > 1) {
                    setTrackPlanBox(TrackPlanBox - 1);
                  }
                }}
              />
              <img
                src="assets/right-arrow.png"
                className="box-arrow right-arrow bx-2"
                onClick={(e) => {
                  if (TrackPlanBox < 3) {
                    setTrackPlanBox(TrackPlanBox + 1);
                  }
                }}
              />
         </div>

           {TrackPlanBox == 1 && <BoxOne TrackPlanBox={1} />}
           {TrackPlanBox == 2 && <BoxTwo TrackPlanBox={2} />} 
           {TrackPlanBox == 3 && <BoxThree TrackPlanBox={3} />}  
         
          {/* <div className="explore-class-box">
            <div className="book-class-container">
              <div className="book-class-container-left">
                <p>PILATES</p>
                <h4>All Levels</h4>
                <p>09:00 AM(60 min)</p>
              </div>
              <div className={"book-class-container-right"}>    
                <button className={cookies.get("theme")}>BOOK CLASS</button>
              </div>
            </div>
          </div> */}



        </div>
        <div className={"col col3 "+cookies.get('theme')}>
          <h1>News</h1>
          <ul>
            <li>
              <div>
                <img src={DashboardListDot} />
                <p>
                  <span>Happy National Day!</span>
                </p>
              </div>
            </li>

            <li>
              <div>
                <img src={DashboardListDot} />
                <p>
                  <span>
                    Don't forget to wear your mask. Strict regulations in place.
                  </span>
                </p>
              </div>
            </li>

            <li>
              <div>
                <img src={DashboardListDot} />
                <p>
                  <span className="annoucement">Announcement</span>
                  <span> New Class for Yoga w/ Kim</span>
                </p>
              </div>
            </li>
            <div className="more-info-link" >
              <a href="/Home" style={{color:"white"}}>More info</a>
            </div>
            <div className="col-3-bottom">
              <a href="#" style={{color:"white"}}>For more Updates</a>
            </div>
          </ul>
        </div>

        <div className="col col4">
          <div class="box calender stagger">
            <div class="calender-top">
              <div class="icon-wrapper" id="calender-back-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.818"
                  height="15.393"
                  viewBox="0 0 9.818 15.393">
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M6.636,0,0,6.636l6.636,6.636"
                    transform="translate(2.121 1.061)"
                    fill="none"
                    stroke="#040f0f"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <strong class="Calender-DateTime">Dec, 2021</strong>
              <div class="icon-wrapper" id="calender-towards-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.818"
                  height="15.393"
                  viewBox="0 0 9.818 15.393">
                  <path
                    id="Path_67"
                    data-name="Path 67"
                    d="M0,0,6.636,6.636,0,13.272"
                    transform="translate(1.061 1.061)"
                    fill="none"
                    stroke="#040f0f"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
            <div class="calender-days-name">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div class="calender-days"></div>
          </div>
        </div>

{/* *************MY Schedule************* */}

        {/* <div className="row"> */}
        <div className="col col5">
          <h1>My Schedule</h1>

          {getbookclass.length>0 ?

          <div className="dashboard-cards">
           <div className="up-d">
           <h5>Today</h5>
           </div>

            {getbookclass.map(data => (

      <div className={'DashboardCard active '+cookies.get("theme")}>

      <p className="dashboard-card-date">{get_date_booked(data.booked_date)}</p>
      <p className="dashboard-card-time">
      {data.start_time}am<span>({data.duration} Hrs)</span>
      </p>

      <p>
        <span className="level">{data.select_classes}</span>
        {/* {data.class_passes} */}
        <span className="complex-name">{data.class_description}</span>
        {/* <span>w/ Lucy</span> */}
      </p>
      <div className="dashboard-card-button">
        <button><a class={"backtoschedule "+cookies.get("theme")+'t'} href="/explore">Views</a></button>
      </div>
    </div>
    ))}
    </div>
    :<div class="col-lg-12">
                                        
        <h6 style={{fontSize:'16px'}} className="{dash-today+cookies.get('theme')}"> Today </h6>

        <p><i>No classes Booked</i></p>
    
    </div>}
    
    
        {getupcomingbookclass.length>0 ?
            <div className="dashboard-cards">
          
          <div className="up-d">
            <h5>Upcoming</h5>
          </div>  
            {/* <DashboardCard active={false} />
            <DashboardCard active={false} />
            <DashboardCard active={false} /> */}

      {getupcomingbookclass.map(data => (

      <div className='DashboardCard false'>
      <p className="dashboard-card-date">{get_date_booked(data.booked_date)}</p>
      <p className="dashboard-card-time">
      {data.start_time} AM<span>({data.duration} Hrs)</span>
      
      </p>

      <p>
        <span className="level">{data.select_classes}</span>
        <span className="complex-name">{data.class_description}</span>
        {/* <span>w/ Lucy</span> */}
      </p>

      <div className="dashboard-card-button">
      <button><a class={"backtoschedule "+cookies.get("theme")+'t'} href="/explore">Views</a></button>
      </div>
    </div>))}

</div>
        
          :<div class="col-lg-12">
                                        
            <h6 className="dash-today"> Upcoming </h6>

            <p><i>No classes Booked</i></p>
        
        </div>}
      
        
        </div>

{/* ==========HISTORY=========== */}

        <div className="col col6 his-dt">
        <div className="title-fixed" data-spy="affix" data-offset-top="197">
        <h1>History</h1> 
        </div>
        <ul >

      
         { blog3.length>0?blog3.slice(0,4).map(data=>(

          
          <div className="dashboard-history-collection">
            <div className="dashboard-history-wrapper">
              <div className={"dashboard-history-pic "+cookies.get('theme')}></div>
              <p>
              {/* Package purchased - */}
              {data.action}
              <h4>{get_date(data.created_at)}</h4>
              {/* <span> {data.created_at},{data.created_time} </span> */}
              </p>
            </div>
            
            
          </div>
          
              )):<li>
              <div className="his-not-found"> <p><center><i>No Information available
                        at this time</i></center></p> </div>
          </li>}
          </ul>
          
          
          {/* <Link className="history-more-info-link">For more info</Link> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardBody;

{/* <h1>History</h1>
          <div className="dashboard-history-collection">
            <div className="dashboard-history-wrapper">
              <div className="dashboard-history-pic"></div>
              <p>
                Yoga<span>/w Lucy</span>
              </p>
            </div>

            <div className="dashboard-history-wrapper">
              <div className="dashboard-history-pic"></div>
              <p>
                Yoga<span>/w Lucy</span>
              </p>
            </div>

            <div className="dashboard-history-wrapper">
              <div className="dashboard-history-pic"></div>
              <p>
                Yoga<span>/w Lucy</span>
              </p>
            </div>
          </div> */}