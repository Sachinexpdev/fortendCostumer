import React, { useEffect, useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import ScheduleCard from "../Schedule/ScheduleCard";
import HeaderF from "../../../assets/img/f.svg";
import { Link, NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';
import BASE_URL from "../../pages/base";
import axios from 'axios';
import HistoryCard from "./HistoryCard";

const cookies = new Cookies();

function get_date(dt){
  //  ***Date Month Functions***
  console.log(dt)
  var date_parts = dt.split('/');
  // var month_parth = dt.split('/ ')
  var dx = new Date(date_parts[2],date_parts[1]-1,date_parts[0]);
  
  // console.log(dx)
  dx = dx.toString().split(' ')
  return dx[0]+' '+dx[1]+' '+dx[2]+' ,'+dx[3] ;

}

function HistoryBody() {
  const [Packages, SetPackages] = useState(true);
  const [getgym,setgym] = useState([])
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/gym/' + cookies.get('gym_id'))
    .then(res => {
    //   console.log(res)
      setgym(res.data)
    //   console.log(getgym[0].gym_name)
    })
    .catch(err => {
      // console.log(err)
    })
  }, [])

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
  //     window.location.href='/history'
      
  // }

   // ============HISTORY=====================

const [blog3, setblog3] = useState([])

useEffect(() => {
axios
  .get(BASE_URL + 'user/history/userhistory/' + cookies.get('uuid') + '/?gym_id=' + cookies.get('gym_id'))
  .then(getuuid => {

    console.log(getuuid);
    setblog3(getuuid.data);
  })

  .catch(err => {
    console.log(err);
  })
}, [])

  return (
    <div className="history-body">
     <div className="profile-body-header"> 
        <div className="profile-label">
          <p>{getgym.gym_name}</p> 

          <NavLink className="zind-9" to="/Home">
          <img src={HeaderF} />
          </NavLink>

          </div>
        {/* ************Choosegym******************* */}
          {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return <div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/dashboard">
          
          {data.gym_initial}
          </NavLink></div>
}
          })}
          </div> */}
        {/* *************************************** */}
          

          
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
                  <NavLink to="/profile"><center>Profile</center> </NavLink>
                </li>
                <li >
                  <NavLink className="logout-red" to="/auth/sign-in"><center> Log Out </center></NavLink>
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
      


      <div className="history-information">

        {/* <div className="history-navigation-button">
        
          <button
            className={`${Packages == true && "active"}`}
            onClick={(e) => SetPackages(true)}>
            Previous Classes
          </button>
          
          <button
            className={`${Packages == false && "active"}`}
            onClick={(e) => SetPackages(false)}>
            Expired Packages
          </button>

        </div>
 */}

{/*********************HIstory********************/}

        <div className="Schedule-information">
      <h1 className="main-heading">History</h1>
        
        <ul >
        { blog3[0]?blog3.map(data=>(
          
        <div className="shedule-cards"> 
        {/* day   month */}

        
        {/* {data.action} */}
        <h3>{data.date} </h3>

        {/* {curryear},{currmonth}{secondmonth}{secondyear} */}
        
        {/* <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} /> */}
          {data.data.map(dx=>{
            return <NavLink className="backtoexplore" to="/explore">
        <HistoryCard buttonValue="Book Again" history={dx} /></NavLink>
          })}
        
        </div>     
          
              )):<li>
              <div>
              </div>
                  {/* <div className="hist-text"> */}
                      {/* <p>  </p> */}
                      <p> 
                          {/* <span>  </span> */}
                      </p>
                  
          </li>}
          </ul>
         
          </div>

        
      </div>
    </div>
  );
}

export default HistoryBody;


// console.log(dx)
//   // alert(dx.getDay())
// dx = dx.toString().split(' ')
//   // var day = days_list[dx.getDay()]
//   // console.log(dx.getDay()-1)
//   return dx[0]+' '+dx[1]+' '+dx[2]+' '+dx[3] ;

// 

// <div className="shedule-cards">
        
//         <h2>Mon Feb 11, </h2>
//         <ScheduleCard buttonValue="Book Again" history={"history"} />
//         <ScheduleCard buttonValue="Book Again" history={"history"} />
//         <h2>Wed Feb 15, 2021</h2>
//         <ScheduleCard buttonValue="Book Again" history={"history"} />

//         <h2>Sat Feb 20, 2021</h2>
//         <ScheduleCard buttonValue="Book Again" history={"history"} />
        
//       </div>





// schd card

// {getgym.map(data=>(
      // <>
      // {packages.map(data => (
  //       <div className={`ScheduleCard ${history}`}>
  //       <div className="first-col">
        
  //         <div className="image"></div>
  //         <p>
  //           Hours<span>{getgym.gym_timings}</span>
  //         </p>
  //         <p>
  //           All Levels<span>{getgym.gender_criteria}</span>
  //           <span>{getgym.age_criteria}</span>
  //         </p>
  //       </div>
  //       <div className="second-col">
  //         <p>
  //         {/* PILATES */}
  
  //         Address<span>{getgym.address}</span>
  //         City<span>{getgym.city}</span>
  //           {/* <span>w/ Lucy</span> */}
  //         </p>
  //       </div>
  
  //       <div className="cancel-button-wrapper">
  //         <button
  //           onClick={(e) => {
  //             ButtonOnClick("Atif");
  //           }}>
  //           {buttonValue}
  //         </button>
  //       </div>
  //     </div>
  //     // ))}</>
  //   );
  // }