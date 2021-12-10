import React, { useEffect, useState } from "react";
import { HandleBookng } from "../../../assets/js/Events/HandleBooking";
import BASE_URL from "../../pages/base";
import Cookies from "universal-cookie";
import ReactTooltip from "react-tooltip";
import { Modal } from "react-responsive-modal";
import $ from "jquery";
import { toastr } from "react-redux-toastr";

const axios = require("axios");
const d = new Date();

const cookies = new Cookies();
function ExploreCourseCard({ buttonValue, ButtonOnClick, seats, id }) {
  useEffect(() => {
    HandleBookng();
  }, []);

  const [crs, getcourse] = useState([]);
  const [getgym, setgym] = useState({});
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/gym/" + cookies.get("gym_id"))
      .then((res) => {
        console.log("errgfvbbnhn>>>>>>>>>.", res.data);
        setgym(res.data);
      })
      .catch((err) => { });
  }, []);

  useEffect(() => {
    console.log(buttonValue);
    console.log(id);
    if (id && id !== 1) {
      axios
        .get(BASE_URL + "gymprofile/get_course/" + id.uuid)
        .then((res) => {
          getcourse(res.data);
          // console.log()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    HandleBookng();
  }, []);
  function getClassesObjs(e) {
    // alert(e.target.id)
    var dt_obj = e.target.id;
    if (dt_obj.includes("-")) {
      var dt_splits = dt_obj.split("-");
      dt_obj = dt_splits[0] + " " + dt_splits[1] + " " + dt_splits[2];
      console.log("dtObj", dt_obj)
      cookies.set("date", dt_obj, { path: "/" });
    }
   
    // alert('here')
    // alert(e.target.value)
    // var dt_obj = e.target.value

    getClas(dt_obj);
  }
  const getClas = (dt_obj) => {
    if (dt_obj.includes("-")) {
      var dt_splits = dt_obj.split("-");
      dt_obj = dt_splits[0] + " " + dt_splits[1] + " " + dt_splits[2];
      cookies.set("date", dt_obj, { path: "/" });
    }
  // ============GymPRofile==========
  }
  function shoot() {
    alert("Great Shot!");
    console.log("hello");
  }
  // =========BOOK-Course=========

  // async function Bookcourse(clas,id) {
  //   debugger
  //   console.log(clas)
  // var user_uuid = cookies.get('uuid');
  // var course_uuid = clas.uuid;
  // var gym_id = cookies.get('gym_id')
  // var date = cookies.get('date')
  // {

  //    console.log('Trying to send request');
  //    // e.preventDefault();
  //    try {
  //       //  let res = await axios.post(BASE_URL + 'user/bookcourse/list/', {

  //         let res = await axios.post(BASE_URL + 'user/home/course_schedule/', {
  //          user_uuid:user_uuid,
  //          course_uuid:course_uuid,
  //          gym_id:gym_id,
  //          date:date
  //        })

  //        if (res.status === 200) {

  //            // test for status you want, etc
  //            console.log(res.status);
  //            console.log(res.data);
  //            // alert(res.data.message);
  //            console.log(id)
  //            window.location='/dashboard';

  //        }
  //        // Don't forget to return something
  //        return res.data
  //    }
  //    catch (err) {
  //        alert('Signup Failed , Please try again.');
  //        window.location='/explore'
  //       //  alert(err)
  //    }
  // }
  // }
  function ApplyPromocode(price) {
    // debugger
    alert(price);
    var url = BASE_URL + "payments/promo";
    // var gym = ;
    // var uuid = ;
    var code = document.getElementById("code").value;
    var i_amount = price;
    var config = {
      method: "post",
      url: url,
      data: {
        gym: cookies.get("gym_id"),
        uuid: cookies.get("uuid"),
        initial_amount: i_amount,
        coupon_code: code,
      },
    };
    axios(config)
      .then((re) => {
        cookies.set("price", re.data.data.final_price, { path: "/" });
        alert(re.data.data.final_price);
      })
      .catch((err) => {
        alert(err);
      });
  }
  async function packagepuchase(clas, id) {
    // console.clear();
    
    var user_uuid = cookies.get("uuid");
    var course_uuid = clas.uuid;
    var gym_id = cookies.get("gym_id");
    var date = cookies.get("date");
    date = `${d.getDay()} ${d.toString().split(" ")[1]} ${d.getFullYear()}`

    console.log("date>>>>>>>>>>>>>", date)
    {
      console.log("Trying to send request");
      // e.preventDefault();
      var config = {
        method: "post",
        url: BASE_URL + "user/bookcourse/list/",
        headers: {
          "content-type": `application/json`,
        },
        data: {
          select_user: user_uuid,  
          gym_id: gym_id,
          select_courses : course_uuid,
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
        console.err(err)
        // alert("Signup Failed , Please try again.");
        //  window.location='/explore'
        //  alert(err)
      }
    }
  }
  
  async function Bookcourse(clas, id) {
    // debugger
    // console.log(clas);
    // var user_uuid = cookies.get("uuid");
    // var course_uuid = clas.uuid;
    // var gym_id = cookies.get("gym_id");
    // var date = cookies.get("date");
    // {
    //   console.log("Trying to send request");
    //   // e.preventDefault();
    //   var config = {
    //     method: "post",
    //     url: BASE_URL + "user/bookcourse/list/",
    //     headers: {
    //       "content-type": `application/json`,
    //     },
    //     data: {
    //       select_user: user_uuid,
    //       select_courses: course_uuid,
    //       gym: gym_id,
    //       date: date,
    //     },
    //   };
    //   try {
    //     let res = await axios(config);
    //     if (res.status === 200 || res.status === 201) {
    //       console.log(res.status);
    //       console.log(res.data);
    //       console.log(id);
    //       window.location = "/dashboard";
    //     }
    //     // Don't forget to return something
    //     return res.data;
    //   } catch (err) {
    //     alert("Signup Failed , Please try again.");
    //     //  window.location='/explore'
    //     //  alert(err)
    //   }
    // }
  }

  return (
    <>
      {crs.gym && (
        <div className="ScheduleCard explore-class-card explore-course-card">
          <div className="first-col curs">
            <div className="image cr-img-d exp-add courses-w">
              {crs.course_image && (
                <img
                  src={BASE_URL.slice(0, -1) + crs.course_image}
                  alt="image"
                />
              )}
            </div>

            {/* <p>
              {crs.start_time}
              <span>{crs.end_time}</span>
            </p> */}

            <p>
              {crs.level}
              <span>{crs.course_gender}</span>
              {crs.classes_age_group ? crs.classes_age_group : crs.age_data}
              {/* {parseInt(cls.start_time.split(':')[0])> d.getHours() && cls.no_of_participants<=6 && cls.no_of_participants+' available'} */}
              <span>(18+)</span>
            </p>
          </div>

          <div className="second-col">
            <p>
              Courses-<span>{crs.course_name}</span>
              Address-<span>{crs.select_location}</span>
              {/* <span>w/ Lucy</span> */}
            </p>
            {/* <a href="">More Info</a> */}
          </div>

          <div className="third-col">
            <div className="third-col-top">
              <h4>
                Start<span>{crs.course_start_date}</span>
              </h4>

              <h4>
                End<span>{crs.course_end_date}</span>
              </h4>
            </div>
            {/* {crs.course_scheduled_on.map(cr=>{ */}
            <p data-tip data-for="happyFace">
              {crs.course_scheduled_on.length} Days / week
            </p>
            <ReactTooltip id="happyFace" type="info">
              <div>
                <span style={{ fontSize: "20px" }}>
                  Start Time : {crs.start_time}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "20px" }}>
                  End Time : {crs.end_time}
                </span>
              </div>
              <div>
                <span>Days : {crs.course_scheduled_on.join(" , ")}</span>

                {/* {crs.course_scheduled_on.map(cr=>{
              return <p>{cr}</p>
            })} */}
              </div>
            </ReactTooltip>
            {/* })} */}
          </div>
          {/* <p className="fourth-col">
        <span>{crs.course_price} KWD</span> 
      </p> */}

          {/* Price{data.course_price} */}
          <div className="cancel-button-wrapper">
            <div className="kwd-d">
              <span className="kwd">{crs.course_price} KWD</span>
            </div>
            <div>
              {/* <button
            className={"book-btn "+cookies.get("theme")}
            id={`book-${id}`}
            style={{ display: "block" }}
            disabled={parseInt(crs.course_start_date.split(' ')[0])>d.getDay()}
            onClick={(e) => {
              ButtonOnClick(true);
              Bookcourse(crs,id);
            
            }}>
           {buttonValue}
          </button> */}

              <button
                className={"book-btn " + cookies.get("theme")}
                onClick={(e) => {
                  getClassesObjs(e);
                  onOpenModal();
                  Bookcourse(crs, id);
                 
                }}
              >
                {buttonValue}
              </button>

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
              {/* seat_available */}
              <span className="available-seats" id={`seats-${id}`}>
                {crs.seat_available <= 5
                  ? crs.seat_available + " seats available"
                  : "Available"}
                {seats}
              </span>
            </div>
          </div>
        </div>
      )}
      {/************ Modal Section ************/}
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Amount :</h2>

        <div className="col-md-12 m-auto buy-modal-main">
          <div id="x"></div>
          {/* <div class="form-group">
                <input type="text" class="form-control" defaultValue={cookies.get("title")} />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" defaultValue={cookies.get("class_passes")} />
              </div> */}

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Email"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Card Number"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="MM / YY"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="CVV"
            />
          </div>

          <div class="form-group promo-code-inp-main">
            <input
              id="code"
              type="text"
              class="form-control"
              name="email"
              placeholder="Promo code"
            />
            <span class="input-group-addon">
              {" "}
              <button
                onClick={() =>
                  ApplyPromocode(cookies.get("data").package_price)
                }
                className="btn-apply-pc"
              >
                {" "}
                Apply{" "}
              </button>{" "}
            </span>
          </div>

          <div class="modal-footer py-footer">
            <div className="col-md-12 text-center">
              <button
                type="button"
                onClick={() => packagepuchase(crs, id)}
                class="btn-paynow"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ExploreCourseCard;
