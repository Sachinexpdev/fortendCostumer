import React, { useEffect, useState } from "react";
import { HandleBookng } from "../../../assets/js/Events/HandleBooking";
import Cookies from "universal-cookie";
import BASE_URL from "../../pages/base";
import Loader from "../../../assets/img/loader";
import $ from "jquery";
import { useHistory, useParams } from "react-router";

const cookies = new Cookies();
const axios = require("axios");
const d = new Date();
// const queryString = require('query-string');
const queryParams = new URLSearchParams(window.location.search);
const ExploreClassCard = ({ buttonValue, ButtonOnClick, seats, id }) => {
  // alert(window.location.search.get('level'))
  // const params = new URLSearchParams(window.location.path);
  // const tags = params.get('level');

  // console.log('Level : '+queryParams.get('level'))
  // console.log('Age : '+queryParams.get('age'))
  // console.log('Gender : '+queryParams.get('gender'))
  const [date, setSlots] = useState([]);

  const [cls, getclasses] = useState([]);
  useEffect(() => {
    // console.clear();
    // console.log(buttonValue)
    // console.log(id)
    // console.log(d.getDay())
    // console.log(parseInt(cookies.get('date').split(' ')[0])>d.getDay()+1)
    if (id && id !== 1) {
      // alert(cookies.get('date'))

      axios
        .get(
          BASE_URL +
            "gymprofile/get_class/" +
            id +
            "/?date=" +
            cookies.get("date")
        )

        .then((res) => {
          // $(".laoder").show();

          // console.log(cookies.get('date').split()[0])
          getclasses(res.data);
          // debugger
          console.log(res.data);
        })
        .catch((err) => {});
    }
  }, []);
  useEffect(() => {
    HandleBookng();
  }, []);

  // alert(cookies.get("gym_uuid"))

  // *******GymClasses*******

  // ============GymPRofile==========

  const [getgym, setgym] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/gym/" + cookies.get("gym_id"))
      .then((res) => {
        setgym(res.data);
      })
      .catch((err) => {});
  }, []);

  // =========BOOK-CLASS=========

  async function Bookclass(clas, id) {
    debugger;
    console.log(clas);
    var user_uuid = cookies.get("uuid");
    var class_uuid = clas.uuid;
    var gym_id = cookies.get("gym_id");
    var date = cookies.get("date");
    {
      console.log("Trying to send request");
      // e.preventDefault();
      var config = {
        method: "post",
        url: BASE_URL + "user/bookclass/list/",
        headers: {
          "content-type": `application/json`,
        },
        data: {
          user_uuid: user_uuid,
          class_uuid: class_uuid,
          gym_id: gym_id,
          date: date,
        },
      };
      try {
        let res = await axios(config);

        if (res.status === 200 || res.status === 201) {
          console.log(res.status);
          console.log(res.data);
          console.log(id);
          window.location = "/dashboard";
        }
        // Don't forget to return something
        return res.data;
      } catch (err) {
        alert("Signup Failed , Please try again.");
        //  window.location='/explore'
        //  alert(err)
      }
    }
  }

  return (
    <>
      {cls.gym && (
        <div className="ScheduleCard explore-class-card ">
          {/* {this.state.classes.map(clas=>{ */}

          <div class="laoder">
            {" "}
            <img src={Loader} />
          </div>
          <div className="first-col">
            <div className="image">
              {cls.class_image && (
                <img
                  src={BASE_URL.slice(0, -1) + cls.class_image}
                  alt="image"
                />
              )}
            </div>
            {/* <div><button onClick={GetClasses}>tt</button></div> */}

            <div className="w-150">
              <strong>
                <p>{cls.class_topic}</p>
              </strong>

              <p>
                Start time <strong>{cls.start_time}</strong>
              </p>
            </div>

            <p className="w-120">
              {/* <span>(18+)</span> */}

              {cls.level}
              <span>{cls.class_gender}</span>
              {cls.classes_age_group ? cls.classes_age_group : cls.age_data}
              {parseInt(cls.start_time.split(":")[0]) > d.getHours() &&
                cls.no_of_participants <= 6 &&
                cls.no_of_participants + " available"}

              {/* <span>{cls.no_of_participants}</span>
          <span>{cls.location}</span> */}
            </p>

            <span class="mobile-view-seats">{seats}</span>
          </div>

          <div className="second-col">
            <p>
              Address<span>{cls.location}</span>
              {/* Address<span>{cls.class_address}</span> */}
              {/* {cls.class_gender} */}
              {/* <span>w/ Lucy</span> */}
            </p>
            {/* <a href="">More Info</a> */}
          </div>

          <div className="cancel-button-wrapper">
            <div>
              {/* {parseInt(cls.start_time.split(':')[0])> d.getHours() || parseInt(cookies.get('date').split(' ')[0])>d.getDay()+1? */}
              <button
                className={"book-btn " + cookies.get("theme")}
                id={`book-${id}`}
                style={{ display: "block" }}
                onClick={(e) => {
                  ButtonOnClick(true);
                  Bookclass(cls, id);
                }}
              >
                {buttonValue}
              </button>
              {/* :<p>Class Already started</p>} */}

              <button
                id={`booked-${id}`}
                className="booked-button"
                style={{ display: "none" }}
              >
                Booked
              </button>

              <button
                id={`cancel-${id}`}
                className="cancel-button"
                style={{ display: "none" }}
              >
                Cancel
              </button>

              <span className="available-seats" id={`seats-${id}`}>
                {cls.seat_available <= 5
                  ? cls.seat_available + " seats available"
                  : "Available"}
                {seats}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreClassCard;

//127.0.0.1:8000/gymprofile/dateslots/?city=Indore

http: {
  /* <> 
    {cls.map(data=>(
    <div className="ScheduleCard explore-class-card ">
   


        <div className="first-col"> 
        <div className="image"></div>

        
        <p>
        09:00am<span>(60 min)</span>
        </p>
        <p>
          All Levels<span>Female</span>
          <span>(18+)</span>
          <span>{data.no_of_participants}</span>
        </p>

        <p>
          PILATES<span>Shuwaikh Mayar Complex</span>
          <span>w/ Lucy</span>
        </p>
        
        <span class="mobile-view-seats">{seats}</span>
      </div>

      <div className="cancel-button-wrapper">
        <div>
          <button
            className="book-btn"
            id={`book-${id}`}
            onClick={(e) => {
              ButtonOnClick(true);
            }}>
            {buttonValue}
          </button>

          <button
            id={`booked-${id}`}
            className="booked-button"
            style={{ display: "none" }}>
            Booked
          </button>

          <button
            id={`cancel-${id}`}
            className="cancel-button"
            style={{ display: "none" }}>
            Cancel
          </button>

          <span className="available-seats" id={`seats-${id}`}>
            {seats}
          </span>
          
        </div>
        
      </div>
      
    </div>
      ))}
      
     
    </>
  );
} */
}
