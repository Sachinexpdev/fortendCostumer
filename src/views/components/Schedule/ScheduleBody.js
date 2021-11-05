import React, { useEffect,useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import ScheduleCard from "./ScheduleCard";
import HeaderF from "../../../assets/img/f.svg";
import BASE_URL from "../../pages/base";

import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import ScheduleCourseCard from "./ScheduleCourseCard";

// import ClassExplore from "../ClassExplore";
// import CourseExplore from "../CourseExplore";
// import Filter from "../Filter";


const cookies = new Cookies();


function ScheduleBody() {
  // const [track, setTrack] = useState("classes");
  const [Packages, SetPackages] = useState(true);
  const [Mockup, ShowMockup] = useState(false);
  const [RowId, SetRowId] = useState("");
  const [isActive, setActive] = useState("false");


  const handleToggle = () => {
    setActive(!isActive);
  };

  const ShowMockupFunc = () => {
    ShowMockup(true);
  };
  const HideMockupFunc = () => {
    ShowMockup(false);
  };

  const HandleMokeUpOperation = () => {
    ShowMockup(false);
  };

  const axios = require('axios');
  const cookies = new Cookies();
 
  // ============GymPRofile==========
  const [getgym,setgym] = useState([])
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

  // ===========SelectGym===========

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
    //     window.location.href='/Schedule'
    // }

    
    // ============HISTORY====================

const [blog3, setblog3] = useState([])
const [blog4, setblog4] = useState([])

useEffect(() => {
  // alert('here')
axios
  .get(BASE_URL + 'user/home/schedule/?uuid=' + cookies.get('uuid') + '&gym_id=' + cookies.get('gym_id'))
  .then(getuuid => {

    console.log(getuuid);
    setblog3(getuuid.data.schedule);
  })

  .catch(err => {
    console.log(err);
  })
}, [])


useEffect(() => {
  // alert('here')
axios
  .get(BASE_URL + 'user/home/course_schedule/?uuid=' + cookies.get('uuid') + '&gym_id=' + cookies.get('gym_id'))
  .then(getuuid => {

    console.log(getuuid);
    setblog4(getuuid.data.schedule);
  }).catch(err => {
    console.log(err);
  })
}, [])
// ===========================

// function CancelClass(class_id,date){
//   var config={
//     method:'post',
//     url:BASE_URL + 'user/home/cancel_class/',
//     data:{
//       user_uuid:cookies.get('uuid'),
//       gym_id:cookies.get('gym_id'),
//       class_uuid:class_id,
//       date:date
//     }
//   }
// axios(config)
//   .then(getuuid => {

//     alert('Class Canceled');
//     window.location.reload();
//     // setblog3(getuuid.data);
//   })

//   .catch(err => {
//     // console.log(err);
//     alert('Some error occured')
//   })
// }


  return (
    <div className="ScheduleBody">
      {Mockup === true && (
        <div className="schedule-mockup">
          <div className="dialog-box">
            <p>Are you sure you want to Cancel? {Mockup}</p>
            <div className="Answers-button">
              <button onClick={HandleMokeUpOperation}>Yes</button>
              <button onClick={HideMockupFunc}>No</button>
            </div>
          </div>
        </div>
      )}

      <div className="profile-body-header"> 
        <div className="profile-label">
          <p>{getgym.gym_name}</p> 

          <NavLink className="zind-9" to="/Home">
          <img src={HeaderF} />
          </NavLink>

          </div>

        {/* ************Choosegym******** */}
          {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return <div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/Schedule">
          
          {data.gym_initial}
          </NavLink></div>
}
          })}
          </div> */}
        {/* ***************************** */}
          

          
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
                  <NavLink to="/profile"> <center>Profile </center></NavLink>
                </li>
                <li >
                  <NavLink className="logout-red" to="/auth/sign-in"><center> Log Out </center></NavLink>
                </li>
              </ul>
            </div>
          </div>
         
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
          <div className="">
 
          
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
      

{/**************My Schedule***************/}

      <div className="Schedule-information">
  
      <h1 className="main-heading">My Schedule</h1>

      <div className="plans-information text-t sched-mn">
      <div className="header-explore-left ">
              {/* <p
                className={`${Packages == true && "active"+cookies.get("theme")+'t'+' '+cookies.get("theme")+'tab'}`}
            onClick={(e) => SetPackages(true)}>
                CLASSES
              </p>
              <p
                className={`${Packages == false && "active"+cookies.get("theme")+'t'+' '+cookies.get("theme")+'tab'}`}
            onClick={(e) => SetPackages(false)}>
                COURSES
              </p> */}
            </div>

      </div>
     

<ul >
{ blog3[0]?blog3.map(data=>(
<div className="shedule-cards"> 
{/* day   month */}
<h3>{data.date} </h3>

{/* {curryear},{currmonth}{secondmonth}{secondyear} */}
{data.data.map(dx=>{
return <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} history={dx}/>

})}
</div>     

    )):<li>
    <div>
    </div>
      
            <p> 
                {/* <span>  </span> */}
            </p>
        
</li>}
</ul>




<ul >
{ blog4[0]?blog4.map(data=>(
<div className="shedule-cards new-sc"> 

<h3>{data.date} </h3>

{data.data.map(dx=>{
return <ScheduleCourseCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} history={dx}/>

})}
</div>     

    )):<li>
    <div>
    </div>
    
            <p> 
                {/* <span>  </span> */}
            </p>
        
</li>}
</ul>



        {/* <ul >
        { blog3[0]?blog3.map(data=>(
        <div className="shedule-cards"> 
        
        <h3>{data.date} </h3>

        
        {data.data.map(dx=>{
          return <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} history={dx}/>
        
        })}
        </div>     
          
              )):<li>
              <div>
              </div>
        
                      <p> 
        
                      </p>
                  
          </li>}
          </ul>
           */}
          </div>
      
    </div>
  );
}

export default ScheduleBody;


// <div className="Schedule-information">
//         <h1 className="main-heading">My Schedule</h1>
//         <div className="shedule-cards">
//           <h2>Mon Feb 11, 2021</h2>
//           <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} />
//           <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} />
//           <h2>Wed Feb 15, 2021</h2>
//           <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} />

//           <h2>Sat Feb 20, 2021</h2>
//           <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} />
//         </div>
//       </div>


// *******DELETE*******

// function Delete(id){
  
//     var url=BASE_URL+'gymprofile/gym/'+id;
//     var config={
//       method:'delete',
//       url:url
//     }
    
//     axios(config).then(re=>{
//       alert('Success');
//       // toastr.success("Success")
//       window.location.reload();
//     }).catch(err=>{
//       alert(err)
//       // toastr.error(err)
//     })
  
// }

// <div className="cancel-button-wrapper">
//         <button onClick={()=>Delete(getgym.uuid)}>
//          Cancel
//         </button>
//       </div>

// ****************************