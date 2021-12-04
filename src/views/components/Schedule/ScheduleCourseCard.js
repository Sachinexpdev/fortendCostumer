import React, { useEffect, useState } from "react";
import BASE_URL from "../../pages/base";
import Cookies from 'universal-cookie';
import axios from 'axios';
import profile from "../../../assets/img/profile-pic.png";
import { NavLink } from "react-router-dom";
import Loader from "../../../assets/img/loader";


function ScheduleCourseCard({ buttonValue, ButtonOnClick, history }) {
  const [Packages, SetPackages] = useState(true);
  const cookies = new Cookies();

  // ============HISTORY==========================

const [blog3, setblog3] = useState([])

// ***************Cancle Class***************
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
// , [])


// ***********Cancle Course**********
function CancelCourse(course_id){
  // debugger
  var config={
    method:'post',
    url:BASE_URL + 'user/home/cancel_course/',
    data:{
      user_uuid:cookies.get('uuid'),
      gym_id:cookies.get('gym_id'),
      course_uuid:course_id,
      // date:date
    }
  }
axios(config)
  .then(getuuid => {

    alert('Course Canceled');
    // window.location.reload();
    // setblog3(getuuid.data);
  })

  .catch(err => {
    // console.log(err);
    alert('Some error occured')
  })
}

// ===========================

  
  return (
    <>
    
    {/* <ul > */}
    
    <div className={`ScheduleCard new-sc ${history}`}>
    
    

      <div className="first-col">
      
        <div className="image">
          {/* <img src={profile}/> */}
          
          {history.history_image && <img src={BASE_URL.slice(0,-1)+ history.history_image} alt="image" />}
        </div>

        <p>
          <span>{history.select_classes}  </span>
            {/* {history.description} */}
          
        </p>

       
        
      </div>
      <div className="second-col">
        <p>
        <p>
        Class passes<span>{history.class_passes}</span>
          
          {/* {history.package_price} */}
        </p>

  
        </p>

      </div>

      <div className="third-col-d">
      <span>{history.price}<br/> KWD</span>
      </div>
    

      <div className="cancel-button-wrapper">
      
        <button
        className={cookies.get('theme')}
          onClick={(e) => {
            // CancelClass(history.select_classes_uuid,history.booked_date);
            CancelCourse(history.select_courses);
          }}>
          
          {buttonValue}
          
        </button>
      </div>
    </div>
    
          {/* </ul> */}
      
    </>
  );
}

export default ScheduleCourseCard;



// {/* ********************HIstory******************* */}

// <div className="Schedule-information">
// <h1 className="main-heading">History</h1>
  
//   {/* <ul > */}
//   { blog3[0]?blog3.map(data=>(
    
//   <div className="shedule-cards"> 
//   {/* day   month */}

  
//   {/* {data.action} */}
//   <h3>{get_date(data.created_at)} </h3>

//   {/* {curryear},{currmonth}{secondmonth}{secondyear} */}
  
//   {/* <ScheduleCard buttonValue="Cancel" ButtonOnClick={ShowMockupFunc} /> */}
//   <ScheduleCard buttonValue="Book Again" history={data} />
//   </div>     
    
//         )):<li>
//         <div>
//         </div>
//             {/* <div className="hist-text"> */}
//                 {/* <p>  </p> */}
//                 <p> 
//                     {/* <span>  </span> */}
//                 </p>
            
//     </li>}
//     {/* </ul> */}
   
//     </div>

  
// </div>
// </div>
// );
// }

