import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import Cookies from "universal-cookie";
import BASE_URL from "../../pages/base";
import { HandleBookng } from "../../../assets/js/Events/HandleBooking";
import LeftArrow from "../../../assets/img/left-arrow.svg";
import RightArrow from "../../../assets/img/right-arrow.svg";
import ExploreClassCard from "./ExploreClassCard";
import { useHistory } from "react-router";
import Loader from "../../../assets/img/loader";
import $ from "jquery";
const cookies = new Cookies();
var count = 0;

function ClassExplore(buttonValue, ButtonOnClick, seats, id, level) {
  const params = useHistory();
  console.log(params.location.search);
  const [ActiveButton, setActiveButton] = useState(1);
  const [Mockup, ShowMockup] = useState(false);
  const [ContinuoMockup, SetContinuoMockup] = useState(false);
  const [CurrentMargin, setCurrentMargin] = useState(0);
  const [NoData, setNoData] = useState(false);
  const [data, setData] = useState([
    // { id: 1, day: "mon" },
  ]);
  const [FetchData, getFetchData] = useState([
    // { id: 1, day: "mon" },
  ]);
  const [date_slots, setSlots] = useState([]);
  const [response, getresponse] = useState([]);
  // const history = useHistory();
  // alert(response)

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

  useEffect(() => {
    cookies.remove("date", { path: "/" });
    axios
      .get(BASE_URL + "gymprofile/dateslots/?city=Indore")
      .then((res) => {
        // cookies.set('date',res.data[0].date,{path:'/'});
        setSlots(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  function getClassesObjs(e) {
    // alert(e.target.id)
    var dt_obj = e.target.id;
    if (dt_obj.includes("-")) {
      var dt_splits = dt_obj.split("-");
      dt_obj = dt_splits[0] + " " + dt_splits[1] + " " + dt_splits[2];
      cookies.set("date", dt_obj, { path: "/" });
    }
    setActiveButton(e.target.id.split("-")[0]);
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
    var url = "";
    $(".laoder").show();
    $(".ExploreClassCards").hide();
    console.log("params>>>>>>", params.location.search);
    if (params.location.search) {
      url =
        BASE_URL +
        "gymprofile/zymclasses?date=" +
        dt_obj +
        "&gym_id=" +
        cookies.get("gym_uuid") +
        "&" +
        params.location.search.slice(1);
    } else {
      url =
        BASE_URL +
        "gymprofile/zymclasses?date=" +
        dt_obj +
        "&gym_id=" +
        cookies.get("gym_uuid");
    }
    axios
      .get(url)
      .then((res) => {
        let FilterData = [];
        for (let i = 0; i < res.data.length; i++) {
          FilterData.push({ id: res.data[i], day: "mon" });
        }
        // console.clear()
        console.log(FilterData);
        getFetchData(FilterData);
        $(".laoder").hide();
        $(".ExploreClassCards").show();
        {
          FilterData.length == 0 ? setNoData(true) : setNoData(false);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  const ShowMockupFunc = (value) => {
    ShowMockup(value);
    SetContinuoMockup(value);
  };

  const HandleMokeUpOperation = () => {
    ShowMockup(false);
  };

  function join(t, a, s) {
    function format(m) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  const HandleDaysData = async (e) => {};

  useEffect(() => {
    let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
    let s = join(new Date(), a, "-");
    // console.clear();
    if (parseInt(s.split("-")[0]) < 10) {
      setActiveButton("0" + s.split("-")[0]);
    } else {
      setActiveButton(s.split("-")[0]);
    }

    getClas(s);
  }, "");

  const [cls, getclasses] = useState([]);
  useEffect(() => {
    // console.clear();
    console.log(buttonValue);
    console.log(id);

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
          getclasses(res.data);
        })
        .catch((err) => {});
    }
  }, []);
  useEffect(() => {
    HandleBookng();
  }, []);

  return (
    <div className="ClassExplore ">
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

      <div className="class-explore-header hd2">
        <img
          src={LeftArrow}
          className="coure-explore-left-arrow"
          onClick={HandleBackMoveSlider}
        />
        <div
          className="course-explore-reel reel2"
          style={{ marginLeft: CurrentMargin }}
        >
          {date_slots.map((dt) => {
            ++count;
            var x = dt.date.split(" ");
            {
              /* alert(x[0]) */
            }
            return (
              <h1
                className={`${
                  ActiveButton === x[0] && "active " + cookies.get("theme")
                }`}
                id={x[0] + "-" + x[1] + "-" + x[2]}
                onClick={(e) => getClassesObjs(e)}
              >
                {count == 1 ? "Today" : dt.day}
                <span>{x[0]}</span>
              </h1>
            );
          })}
        </div>

        <img
          src={RightArrow}
          className="coure-explore-right-arrow"
          onClick={HandleForwardMoveSlider}
        />
        <h1
          className={`${ActiveButton == 2 && "active"}`}
          id="10-Jul-2021"
          onClick={(e) => setActiveButton(2)}
        >
          TUES<span>2</span>
        </h1>
        <h1
          className={`${ActiveButton == 3 && "active"}`}
          onClick={(e) => setActiveButton(3)}
        >
          WED<span>3</span>
        </h1>
        <h1
          className={`${ActiveButton == 4 && "active"}`}
          onClick={(e) => setActiveButton(4)}
        >
          THU<span>4</span>
        </h1>
        <h1
          className={`${ActiveButton == 5 && "active"}`}
          onClick={(e) => setActiveButton(5)}
        >
          FRI<span>5</span>
        </h1>
        <h1
          className={`${ActiveButton == 6 && "active"}`}
          onClick={(e) => setActiveButton(6)}
        >
          SAT<span>6</span>
        </h1>
        <h1
          className={`${ActiveButton == 7 && "active"}`}
          onClick={(e) => setActiveButton(7)}
        >
          SUN<span>7</span>
        </h1>
      </div>

      <div class="laoder">
        {" "}
        <img src={Loader} />
      </div>
      <div className="ExploreClassCards ">
        {FetchData.map((EachCard) => (
          <ExploreClassCard
            buttonValue="Book"
            id={EachCard.id}
            ButtonOnClick={ShowMockupFunc}
            key={EachCard.id}
          />
        ))}
        {NoData == true && (
          <div className="no-data-container">
            <p>
              <i>No Classes available for this day. Please try another date.</i>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassExplore;
