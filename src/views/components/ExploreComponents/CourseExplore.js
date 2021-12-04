import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import LeftArrow from "../../../assets/img/left-arrow.svg";
import RightArrow from "../../../assets/img/right-arrow.svg";
import ExploreCourseCard from "./ExploreCourseCard";
import BASE_URL from "../../pages/base";
import { HandleBookng } from "../../../assets/js/Events/HandleBooking";
import axios from "axios";
import $ from "jquery";
import Loader from "../../../assets/img/loader";

const cookies = new Cookies();
// Course date/mounth fun.
function CourseExplore(buttonValue, ButtonOnClick, seats, id) {
  const [Mockup, ShowMockup] = useState(false);
  const [ActiveButton, setActiveButton] = useState(1);
  const [NoData, setNoData] = useState(false);
  const [CurrentMargin, setCurrentMargin] = useState(0);
  const [date_slots, setSlots] = useState([]);
  const [FetchData, getFetchData] = useState([
    // { id: 1, day: "mon" },
  ]);

  useEffect(() => {
    cookies.remove("date", { path: "/" });
    axios
      .get(BASE_URL + "gymprofile/course_timeline")
      .then((res) => {
        setSlots(res.data);
      })
      .catch((err) => {});
  }, []);
  // **********************************

  // **************Course details****************
  const [crs, getcourse] = useState([]);
  useEffect(() => {
    console.log(buttonValue);
    console.log(id);
    if (id && id !== 1) {
      axios
        .get(BASE_URL + "gymprofile/get_course/" + id)
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

  // ******************************************

  const HandleForwardMoveSlider = (e) => {
    let Reel = document.querySelector(".course-explore-reel");
    if (CurrentMargin < 0) {
      setCurrentMargin(CurrentMargin + 88);
    }
  };

  const HandleBackMoveSlider = (e) => {
    let Reel = document.querySelector(".course-explore-reel");
    if (CurrentMargin < 400) {
      setCurrentMargin(CurrentMargin - 88);
    }
  };

  const ShowMockupFunc = (value) => {
    ShowMockup(value);
  };

  const HandleMokeUpOperation = () => {
    ShowMockup(false);
  };

  function getClassesObjs(year, month) {
    setActiveButton(month);
    getClas(year, month);
  }

  const getClas = (year, month) => {
    console.log("year", year);
    getFetchData([]);
    $(".laoder").show();
    $(".course-explore-cards").hide();
    axios
      .get(
        BASE_URL +
          "gymprofile/course?year=" +
          year +
          "&month=" +
          month +
          "&gym_id=" +
          cookies.get("gym_uuid")
      )
      .then((res) => {
        let FilterData = [];
        for (let i = 0; i < res.data.length; i++) {
          FilterData.push({ id: res.data[i], day: "mon" });
        }
        // console.clear()
        console.log("filterdata>>>>>>>>", FilterData);
        getFetchData(FilterData);
        $(".laoder").hide();
        $(".course-explore-cards").show();
        {
          FilterData.length == 0 ? setNoData(true) : setNoData(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const d = new Date();

    // console.clear();
    setActiveButton(monthNames[d.getMonth()]);

    getClas(d.getFullYear(), monthNames[d.getMonth()]);
  }, "");

  // var disabledDates = ["2021-11-14","2021-11-21"];
  // $("#appointmentpicker").datepicker({
  // 	beforeShowDay: function(date) {
  // 	   //Simdilik pazar gununu kapatiyoruz
  // 	   	var day = date.getDay();
  // 	   	var month = date.getMonth();
  // 	   	var year = date.getYear();
  // 		var string = $.datepicker.formatDate('yy-mm-dd', date);
  // 	   	return [(day != 0) && disabledDates.indexOf(string) == -1,''];
  // 	}
  // });

  return (
    <div className="CourseExplore">
      {Mockup === true && (
        <div className="schedule-mockup">
          <div className="dialog-box">
            <p>Your booking was successfull. </p>
            <div className="Answers-button">
              <button onClick={HandleMokeUpOperation}>Continue</button>
            </div>
          </div>
        </div>
      )}

      <div className="course-explore-header">
        <div className="course-explore-reel-container">
          <img
            src={LeftArrow}
            className="coure-explore-left-arrow"
            onClick={HandleBackMoveSlider}
          />
          <div
            className="course-explore-reel"
            style={{ marginLeft: CurrentMargin }}
          >
            {date_slots.map((dt) => {
              return (
                <h1
                  className={`${
                    ActiveButton == dt.month && "active " + cookies.get("theme")
                  }`}
                  id={dt.month}
                  onClick={() => getClassesObjs(dt.year, dt.month)}
                >
                  {dt.month}
                  <span>{dt.year}</span>
                </h1>
              );
            })}
          </div>
          <img
            src={RightArrow}
            className="coure-explore-right-arrow"
            onClick={HandleForwardMoveSlider}
          />
        </div>
      </div>

      <div class="laoder">
        {" "}
        <img src={Loader} />
      </div>
      <div className="course-explore-cards">
        {FetchData.map((fd) => {
          return (
            <ExploreCourseCard
              id={fd.id}
              buttonValue="Book"
              ButtonOnClick={ShowMockupFunc}
              seats=""
              // "2 Seats Available"
            />
          );
        })}
        {NoData == true && (
          <div className="no-data-container">
            <p>
              <i>No Courses available for this day. Please try another date.</i>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseExplore;
