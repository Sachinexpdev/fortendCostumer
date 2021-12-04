import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import BASE_URL from "../../pages/base";

import Rating from "react-rating";

import "../../../assets/css/bootstrap.min.css";
import Like from "./Like";

// var Rating = require('react-rating');

const cookies = new Cookies();

function ExploreBusinessRow(props) {
  const [isActive, setActive] = useState("false");

  const [usergyms, selectedgym] = useState([]);
  const [getgym, setgym] = useState([]);
  const [selectedgymids, SelectedIds] = useState([]);

  const [heart, setHeart] = useState([false]);

  // var data='agvdhsv';

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // const handleToggle = () => {
  //   setActive(!isActive);
  // };

  // const function handleClick () =>(event) {
  //   this.setState({value: undefined});
  // }

  // function handleClick (){
  //   alert("hi")
  //   setHeart(true)
  // }

  useEffect(() => {
    axios
      .get(BASE_URL + "user/select/gym/?uuid=" + cookies.get("uuid"))
      .then((res) => {
        console.log(res);
        // debugger
        selectedgym(res.data.context);
        SelectedIds(res.data.uuids);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/")
      .then((res) => {
        // console.log(res)
        // console.log(cookies.get('email'));
        setgym(res.data);
        // data2 = setgym(res.data);
        // console.clear()
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  async function SelectGym(data) {
    // debugger

    // console.log(data)
    try {
      console.log("Trying");
      let res = await axios.post(BASE_URL + "user/select/gym/", {
        gym_user: cookies.get("uuid"),
        gym: data,
      });
      if (res.status === 200) {
        // debugger
        console.log(res.data);
        // window.location.reload();
      }
    } catch (err) {
      console.error(err);
      alert("Login unsuccessfull.");
      window.location = "#/Login";
    }
  }

  const [TotalAdd, setTotalAdd] = useState(0);

  function ChangeValue(e, uuid) {
    HandleAddedButton(e);
    SelectGym(uuid);
    window.location.reload();
  }
  const HandleAddedButton = (e) => {
    let TotalItem = 0;

    if (e.target.textContent == "Join") {
      TotalItem = TotalItem + 1;
      e.target.textContent = "Join";
      // ADDED

      window.sessionStorage.setItem("added-amount", TotalItem);
    } else {
      TotalItem = TotalItem - 1;
      e.target.textContent = "Join";
      window.sessionStorage.setItem("added-amount", TotalItem);
    }
  };

  function Search() {
    // debugger
    var data = document.getElementById("search").value;
    // alert(data)
    if (data === "") {
      // window.location.reload()
    }
    axios
      .get(BASE_URL + "gymprofile/gym_search/" + data)
      .then((res) => {
        // console.log(res)
        // console.log(cookies.get('email'));
        setgym(res.data);
        // data2 = setgym(res.data);
        // console.clear()
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }

  return (
    <>
      <div className="ExploreBusinessHome">
        <div className="ExploreBusinessHeader">
          <div className="ExploreBusinessHeader-left">
            <h2 className="main-heading">Explore</h2>

            <div className="input-wrapper">
              <input
                type="text"
                id="search"
                placeholder="Search for Business"
              />
              <button onClick={Search} className="src-btn btn-ac">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.768"
                  height="18.768"
                  viewBox="0 0 22.768 22.768"
                >
                  <g
                    id="Icon_feather-search"
                    data-name="Icon feather-search"
                    transform="translate(1.5 1.5)"
                  >
                    <path
                      id="Path_48"
                      data-name="Path 48"
                      d="M21.52,13.01A8.51,8.51,0,1,1,13.01,4.5,8.51,8.51,0,0,1,21.52,13.01Z"
                      transform="translate(-4.5 -4.5)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_49"
                      data-name="Path 49"
                      d="M29.6,29.6l-4.627-4.627"
                      transform="translate(-10.455 -10.455)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="filters">
          <h1 className="main-heading">Filter</h1>
          <form class="checkbox-form">
            <div className="checkbox-container">
              <h2>Business with</h2>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="classes-checkbox" />
                <label for="classes-checkbox">Classes</label>

                <label for="classes-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Training-checkbox" />
                <label for="Training-checkbox">Personal Training</label>

                <label for="Training-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Gym-checkbox" />
                <label for="Gym-checkbox">Open Gym</label>

                <label for="Gym-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
            </div>
            <div className="checkbox-container">
              <h2>Gender</h2>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Female-checkbox" />
                <label for="Female-checkbox">Female</label>

                <label for="Female-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Male-checkbox" />
                <label for="Male-checkbox">Male</label>

                <label for="Male-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Mixed-checkbox" />
                <label for="Mixed-checkbox">Mixed</label>

                <label for="Mixed-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
            </div>
            <div className="checkbox-container">
              <h2>Location</h2>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Shuwaikh-checkbox" />
                <label for="Shuwaikh-checkbox">Shuwaikh</label>

                <label for="Shuwaikh-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="city-checkbox" />
                <label for="city-checkbox">New Delhi</label>

                <label for="city-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Karla-checkbox" />
                <label for="Karla-checkbox">Karla</label>

                <label for="Karla-checkbox">
                  <svg
                    className="selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <path
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83ZM6.105,10.149l4.65-4.65a.4.4,0,0,0,0-.572l-.572-.572a.4.4,0,0,0-.572,0L5.819,8.147,4.049,6.377a.4.4,0,0,0-.572,0L2.9,6.948a.4.4,0,0,0,0,.572l2.628,2.628a.4.4,0,0,0,.572,0Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#7966ff"
                    />
                  </svg>
                  <svg
                    className="no-selected-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535"
                  >
                    <g
                      id="Icon_awesome-check-circle"
                      data-name="Icon awesome-check-circle"
                      transform="translate(-0.563 -0.563)"
                      fill="none"
                    >
                      <path
                        d="M13.1,6.83A6.268,6.268,0,1,1,6.83.563,6.268,6.268,0,0,1,13.1,6.83Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.83001708984375 12.09753704071045 C 9.734537124633789 12.09753704071045 12.09753704071045 9.734537124633789 12.09753704071045 6.83001708984375 C 12.09753704071045 3.925497055053711 9.734537124633789 1.562497138977051 6.83001708984375 1.562497138977051 C 3.925497055053711 1.562497138977051 1.562497138977051 3.925497055053711 1.562497138977051 6.83001708984375 C 1.562497138977051 9.734537124633789 3.925497055053711 12.09753704071045 6.83001708984375 12.09753704071045 M 6.83001708984375 13.09753704071045 C 3.368556976318359 13.09753704071045 0.562497079372406 10.29147720336914 0.562497079372406 6.83001708984375 C 0.562497079372406 3.368556976318359 3.368556976318359 0.562497079372406 6.83001708984375 0.562497079372406 C 10.29147720336914 0.562497079372406 13.09753704071045 3.368556976318359 13.09753704071045 6.83001708984375 C 13.09753704071045 10.29147720336914 10.29147720336914 13.09753704071045 6.83001708984375 13.09753704071045 Z"
                        stroke="none"
                        fill="#e1dfdf"
                      />
                    </g>
                  </svg>
                </label>
              </div>
            </div>
            <button>Apply filters</button>
          </form>
        </div>

        <div className="explore-table">
          {getgym.map((data) => {
            {
              /* alert(data.gender_criteria) */
            }

            if (
              cookies.get("gender") === data.gender_criteria ||
              data.gender_criteria === "Unisex"
            ) {
              return (
                <div className="explore-row">
                  <div className="explore-col-1">
                    {data.gym_image && (
                      <img
                        src={BASE_URL.slice(0, -1) + data.gym_image}
                        alt="image"
                      />
                    )}
                  </div>

                  <div className="explore-col-2">
                    <h4>{data.gym_name}</h4>
                    <span>{data.about}</span>
                  </div>

                  <div className="exlpore-col-4">
                    {/* <span>Offering Classes & PT</span> */}
                    <span className="exlpore-col-4-heading">Address</span>
                    <span>{data.address}</span>

                    <span className="exlpore-col-4-heading">Gender</span>
                    <span>
                      {" "}
                      {data.gender_criteria}({data.age_criteria})
                    </span>
                    {/* <span>Shuwaikh Mayar Complex</span> */}
                  </div>
                  <div className="exlpore-col-4">
                    <span className="exlpore-col-4-heading">Hours</span>
                    <span>{data.gym_timings}</span>
                    <span className="exlpore-col-4-heading">Tel</span>
                    <span>{data.contact_number}</span>
                  </div>

                  <div className="exlpore-col-5 mb-d">
                    {selectedgymids.includes(data.uuid) ? (
                      <div>
                        <input
                          checked
                          disabled
                          type="checkbox"
                          id={`checkbox-${data.uuid}`}
                        />
                        <label for={`checkbox-${data.uuid}`}>
                          {/* ADDED */}
                          Join
                        </label>
                      </div>
                    ) : (
                      <div>
                        <input type="checkbox" id={`checkbox-${data.uuid}`} />
                        <label
                          for={`checkbox-${data.uuid}`}
                          onClick={(e) => ChangeValue(e, data.uuid)}
                        >
                          {/* ADD */}
                          Join
                        </label>
                      </div>
                    )}

                    <div className="heart-icn-d">
                      <Like />
                      {/* <span id={data.uuid} className={"glyphicon glyphicon-heart-empty"}  ></span> */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

{
  /* 
        <button class="btn-add "> 
            <span onClick={()=>SelectGym(data)}>ADD</span>
        </button> */
}

{
  /* <button onClick={HandleAddedButton}>ADD</button> */
}

// <label for={`checkbox-${props._id}`} onClick={() => {
//   SelectGym(data);
//   HandleAddedButton();
// }}>

export default ExploreBusinessRow;
