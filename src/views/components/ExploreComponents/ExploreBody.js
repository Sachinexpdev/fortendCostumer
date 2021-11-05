import React, { useEffect,useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import HeaderF from "../../../assets/img/f.svg";
import ClassExplore from "./ClassExplore";
import CourseExplore from "./CourseExplore";
import Filter from "./Filter";
import { Link, NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios';
import BASE_URL from "../../pages/base";


const cookies = new Cookies();
function ExploreBody() {
  const [track, setTrack] = useState("classes");
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  // ============GymPRofile==========
  const [getgym,setgym] = useState([])
  useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/gym/' + cookies.get('gym_id'))
    .then(res => {
    //   console.log(res)
      setgym(res.data)
      cookies.set('gym_uuid',res.data.uuid,{path:'/'});
    //   console.log(getgym[0].gym_name)
    })
    .catch(err => {
      // console.log(err)
    })
  }, [])

  // ===========SelectGym===========

  const [getgym1,setgym1] = useState([])
    useEffect(() => {
      axios
      .get(BASE_URL + 'user/select/gym/?uuid='+cookies.get('uuid'))
      .then(res => {
        // console.log(res)
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
    //     window.location.href='/explore'
    // }


  return (
    <div className="ExploreBody">
      <div className="profile-body-header"> 
        <div className="profile-label">
          <p>{getgym.gym_name}</p> 

          <NavLink className="zind-9" to="/Home">
          <img src={HeaderF} />
          </NavLink>

          </div>

          {/* ************Choosegym-function************* */}
          {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return <div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/explore">
          
          {data.gym_initial}
          </NavLink></div>
}
          })}
          </div> */}
        {/* ******************************************* */}
  
          

          
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
                  <NavLink to="/profile"><center> Profile</center> </NavLink>
                </li>
                <li >
                  <NavLink className="logout-red" to="/auth/sign-in"> <center>Log Out </center></NavLink>
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
      
      <div className="explore-information">
        <div className="explore-left-section">
          <header>
            <div className="header-explore-left">
              <p
                className={`${track == "classes" && "active "+cookies.get("theme")+'t'+' '+cookies.get("theme")+'tab'}`}
                onClick={(e) => setTrack("classes")}>
                CLASSES
              </p>
              <p
                className={`${track == "courses" && "active "+cookies.get("theme")+'t'+' '+cookies.get("theme")+'tab'}`}
                onClick={(e) => setTrack("courses")}>
                COURSES
              </p>
            </div>
          </header>
          {track == "classes" ? <ClassExplore /> : <CourseExplore />}
        </div>
        <div className="explore-right-section">
          <Filter />
        </div>
      </div>
    </div>
  );
}
export default ExploreBody;
