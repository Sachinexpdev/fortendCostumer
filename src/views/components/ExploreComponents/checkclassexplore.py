import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import BASE_URL from "../../pages/base";
import { HandleBookng } from "../../../assets/js/Events/HandleBooking";
import ExploreClassCard from "./ExploreClassCard";

const cookies = new Cookies()
var count = 0;

function ClassExplore(buttonValue, id) {
  const [ActiveButton, setActiveButton] = useState(1);
  const [Mockup, ShowMockup] = useState(false);
  const [ContinuoMockup, SetContinuoMockup] = useState(false);
  const [NoData, setNoData] = useState(false);
  const [data, setData] = useState([
    // { id: 1, day: "mon" },
    
  ]);
  const [FetchData, getFetchData] = useState([
    // { id: 1, day: "mon" },
  ]);
  const [date_slots, setSlots] = useState([])
  // const [cls, getclasses] = useState([])

  useEffect(() => {
    cookies.remove('date',{path:'/'})
    axios
      .get(BASE_URL + 'gymprofile/dateslots/?city=Indore')
      .then(res => {
        
        // cookies.set('date',res.data[0].date,{path:'/'});
        setSlots(res.data)
      //   // alert(res.data[0].date)
      //   // getClassesObjs(res.data[0].date)
      //   axios
      // .get(BASE_URL + 'gymprofile/zymclasses?date='+res.data[0].date+'&gym_id='+cookies.get('gym_uuid'))
      // .then(res => {
      //   let FilterData = []
      //   for(let i=0;i<res.data.length;i++){
      //     FilterData.push({'id':res.data[i],'day':'mon'})
      //   }
      //   console.clear()
      //   console.log(FilterData)
      //   getFetchData(FilterData)
      //   {
      //     FilterData.length == 0 ? setNoData(true) : setNoData(false);
      //   }
        
      // })
      // .catch(err => {
      //   // console.log(err)
      // })
       
      })
      .catch(err => {
        // console.log(err)
      })
  }, [])

  function getClassesObjs(e){
    // alert(e.target.id)
    var dt_obj = e.target.id;
    if(dt_obj.includes('-')){
      
      var dt_splits = dt_obj.split('-')
      dt_obj = dt_splits[0]+' '+dt_splits[1]+' '+dt_splits[2]
      cookies.set('date',dt_obj,{path:'/'});
    }
    setActiveButton(e.target.id.split('-')[0])
    // alert('here')
    // alert(e.target.value)
    // var dt_obj = e.target.value
    
    getClas(dt_obj);
  }

  


  const getClas=(dt_obj)=>{
    if(dt_obj.includes('-')){
      
      var dt_splits = dt_obj.split('-')
      dt_obj = dt_splits[0]+' '+dt_splits[1]+' '+dt_splits[2]
      cookies.set('date',dt_obj,{path:'/'});
    }
    axios
      .get(BASE_URL + 'gymprofile/zymclasses?date='+dt_obj+'&gym_id='+cookies.get('gym_uuid'))
      .then(res => {
        let FilterData = []
        for(let i=0;i<res.data.length;i++){
          FilterData.push({'id':res.data[i],'day':'mon'})
        }
        console.clear()
        console.log(FilterData)
        getFetchData(FilterData)
        {
          FilterData.length == 0 ? setNoData(true) : setNoData(false);
        }
        
      })
      .catch(err => {
        // console.log(err)
      })
  }
  const ShowMockupFunc = (value) => {
    ShowMockup(value);
    SetContinuoMockup(value);
  };

  const HandleMokeUpOperation = () => {
    ShowMockup(false);
  };


  function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }
 


  const HandleDaysData = async(e) => {
    
    
    // getClassesObjs(dt_obj);
    
  };

  useEffect(() => {
    debugger
    let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
    let s = join(new Date, a, '-');
    console.clear();
    if (parseInt(s.split('-')[0])<10){
      setActiveButton('0'+s.split('-')[0])
    }
    else{
      setActiveButton(s.split('-')[0])
    }
    
    getClas(s)
  }, '');

    // *******Bookclass********

    async function Bookclass(clas) {
    // debugger
    console.log(clas)
  var user_uuid = cookies.get('uuid');
  var class_uuid = clas.uuid;
  var gym_id = cookies.get('gym_id')
  var date = clas.class_date
  {  
    
     console.log('Trying to send request');
     // e.preventDefault();
     try {
         let res = await axios.post(BASE_URL + 'user/bookclass/list/', {
           user_uuid:user_uuid,
           class_uuid:class_uuid,
           gym_id:gym_id,
           date:date
         })
         
         if (res.status === 200) {
           
             // test for status you want, etc
             console.log(res.status);
             console.log(res.data);
             // alert(res.data.message);
  
             window.location='/dashboard';
            
  
         }
         // Don't forget to return something
         return res.data
     }
     catch (err) {
         console.error('Signup Failed , Please try again.');
         window.location='/plans'
        //  alert(err)
     }
  }
  }
// ***************
  const [cls, getclasses] = useState([])
  useEffect(() => {
    console.clear();
    console.log(buttonValue)
    console.log(id)
    if(id && id!==1){
      // alert(cookies.get('date'))
    axios
      .get(BASE_URL + 'gymprofile/get_class/'+id+'/?date='+cookies.get('date'))
      .then(res => {
        
        
        getclasses(res.data)
        
      })
      .catch(err => {
        
      })
    }
    
  }, [])
  useEffect(() => {
    HandleBookng();
  }, []);

  return (
    <div className="ClassExplore">
      {Mockup === true && (
        <div className="schedule-mockup">
          <div className="dialog-box">
            <p>Your booking was successfull</p>
            <div className="Answers-button">
              <button onClick={HandleMokeUpOperation}>Continue</button>
              
            </div>
          </div>
        </div>
      )}
{/* 
      <button className="buy-button" onClick={() => {
          onOpenModal();
          package_price(data.uuid ,data.package_price , data.package_name ,data.class_count);
        }}  >Buy</button> */}

      {/* onClick={(e)=>HandleDaysData(e)} */}

      <div className="class-explore-header">

     {date_slots.map(dt=>{
       ++count;
       var x = dt.date.split(' ')
       {/* alert(x[0]) */}
       return <h1
          className={`${ActiveButton === x[0] && "active"}`}
          id={x[0]+'-'+x[1]+'-'+x[2]}
          onClick={(e) => getClassesObjs(e)}>
          {count==1?"Today":dt.day}<span>{x[0]}</span>
        </h1>
     })}
        {/* <h1
          className={`${ActiveButton == 2 && "active"}`}
          id="10-Jul-2021"
          onClick={(e) => setActiveButton(2)}>
          TUES<span>2</span>
        </h1>
        <h1
          className={`${ActiveButton == 3 && "active"}`}
          onClick={(e) => setActiveButton(3)}>
          WED<span>3</span>
        </h1>
        <h1
          className={`${ActiveButton == 4 && "active"}`}
          onClick={(e) => setActiveButton(4)}>
          THU<span>4</span>
        </h1>
        <h1
          className={`${ActiveButton == 5 && "active"}`}
          onClick={(e) => setActiveButton(5)}>
          FRI<span>5</span>
        </h1>
        <h1
          className={`${ActiveButton == 6 && "active"}`}
          onClick={(e) => setActiveButton(6)}>
          SAT<span>6</span>
        </h1>
        <h1 
          className={`${ActiveButton == 7 && "active"}`}
          onClick={(e) => setActiveButton(7)}>
          SUN<span>7</span>
        </h1> */}
      </div>
      
      
      <div className="ExploreClassCards">
        {FetchData.map((EachCard) => (
          
          <ExploreClassCard
            buttonValue="Book"
            id={EachCard.id}

            ButtonOnClick={ShowMockupFunc}
            
            seats={cls.no_of_participants<=6?cls.no_of_participants+'   available':'Available'}
            key={EachCard.id}
          />
        ))}
        {NoData == true && (
          <div className="no-data-container">
            <p><i>No Classes available for this day. Please try another date.</i> </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassExplore;
