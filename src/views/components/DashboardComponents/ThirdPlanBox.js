import React, { useState,useEffect }from "react";
import PersonRun from "../../../assets/img/person-run.svg";
import Cookies from 'universal-cookie'
import BASE_URL from "../../pages/base";

function ThirdPlanBox() {

  const cookies = new Cookies();
  // cookies.set('gym_id', '3e4f2b18-b3f2-4cf9-88d5-0ed740f1ed7b', { path: '/' });
  // console.log(cookies.get('gym_id'))
  // console.log(cookies.get('uuid'))
  // console.log(cookies.get('email'))
  
  var email = cookies.get('email');
  
  const [value, onChange] = useState(new Date());

  const [getpackage, setpackage] = useState([])
  const [getdate,setdate] = useState([]) 
  const [gettommdate,settommdate] = useState([])
  const [getthirddate,setthirddate] = useState([])


  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const axios = require('axios');
  var date = new Date();

  var currdate = date.getDate()+'/'+monthNames[date.getMonth()]+'/'+date.getFullYear();
  const currday =  date.getDate()+ ' ' +  monthNames[date.getMonth()]+ ' ' + +date.getFullYear()

  date.setDate(date.getDate() + 1);

  var tommdate = date.getDate()+'/'+monthNames[date.getMonth()]+'/'+date.getFullYear();
  const tommday =  date.getDate()+ ' ' +  monthNames[date.getMonth()]+ ' ' + +date.getFullYear()

  date.setDate(date.getDate() + 1);

  var thirddate = date.getDate()+'/'+monthNames[date.getMonth()]+'/'+date.getFullYear();
  const thirdday =  date.getDate()+ ' ' +  monthNames[date.getMonth()]+ ' ' + +date.getFullYear();
  

  useEffect(() => {
    axios
    .get(BASE_URL + 'user/subscription/user/?uuid='+cookies.get('uuid')+'&gym_id='+cookies.get('gym_id'))
    .then(getuuid => {
        setpackage(getuuid.data);
    })

    .catch(err => {
        console.log(err);
    })
}, [])

  return (
    <div className="active-plan-ui-box">
      <div className="plan-box-three-dots">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          viewBox="0 0 7 7">
          <g
            id="Ellipse_29"
            data-name="Ellipse 29"
            fill="#fff"
            stroke="#707070"
            stroke-width="1">
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="3" fill="none" />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          viewBox="0 0 7 7">
          <g
            id="Ellipse_29"
            data-name="Ellipse 29"
            fill="#fff"
            stroke="#707070"
            stroke-width="1">
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="3" fill="none" />
          </g>
        </svg>

        <svg
          className="active"
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          viewBox="0 0 7 7">
          <g
            id="Ellipse_29"
            data-name="Ellipse 29"
            fill="#fff"
            stroke="#707070"
            stroke-width="1">
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="3" fill="none" />
          </g>
        </svg>
      </div>

      <div className="left">
        <p>Membership</p>

        <img src={PersonRun} />
      </div>

    
      {(() => {
        if (getpackage.uuid){
            return(<div className="right">
     
        <p>{getpackage.package}</p>
        <div className="active-plan-ui-time">
        
          <h5>Unlimited Gym Access</h5>
          <p>
            {getpackage.days_left}<span>Days LEft</span>
          </p>
        </div>
        
        <p class="expire-time">
          Ends by <span>{getpackage.subscription_validity}</span>
        </p>
        
      </div>
      )
                    }
                    else{
                        return(
                            <>

                            <p>No Active Package</p>
                            

                            </>
                        )
                    }
                })()}
    </div>
  );
}

export default ThirdPlanBox;