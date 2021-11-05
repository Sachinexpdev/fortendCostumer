import React, { useEffect, useState } from "react";
import BASE_URL from "../../pages/base";
import Cookies from 'universal-cookie';
import axios from 'axios';
import profile from "../../../assets/img/profile-pic.png";
import { NavLink } from "react-router-dom";


function HistoryCard({ buttonValue, ButtonOnClick, history }) {
  const cookies = new Cookies();

  // ============HISTORY==========================

const [blog3, setblog3] = useState([])

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
    <>
    {/* <ul > */}
    
    <div className={`ScheduleCard new-sc ${history}`}>
      <div className="first-col">
      
      <div className="image">
          {/* <img src={profile}/> */}
          
          {history.history_image && <img src={BASE_URL.slice(0,-1)+ history.history_image} alt="image" />}
        </div>

        <p>
        {history.action.includes('class booked') ?history.action.split('-')[1]:history.action} 
          {/* .split('for')[0] */}
        </p>

       
        
      </div>
      <div className="second-col">
        <p>
        <p>
        <span>{history.package_class_passes} Class pass</span>
          
          {/* {history.package_price} */}
        </p>

  
        </p>

      </div>

      <div className="third-col-d">
      <span>{history.history_price}<br/> KWD</span>
      {/* <span>Valid Upto{history.package_duration} Weeks<br/></span> */}
      </div>
    

      {/* <div className="cancel-button-wrapper">
        <button
        className={cookies.get('theme')}
          onClick={(e) => {
            // ButtonOnClick("Atif");
          }}>
          
          {buttonValue}
          
        </button>
      </div> */}
    </div>
    
          {/* </ul> */}
      
    </>
  );
}

export default HistoryCard;



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

