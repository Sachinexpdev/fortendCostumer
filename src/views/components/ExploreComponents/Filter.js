import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { HandleFilterCheckbox } from "../../../assets/js/Events/HandleFilterCheckbox";
import BASE_URL from "../../pages/base";
import axios from "axios";
import Cookies from "universal-cookie";
import $ from "jquery";
const cookies = new Cookies();

function Filter() {
  const history = useHistory();
  // const [filter, setFilter] = useState([]);

  function GetUrlParamas() {
    var params = window.location.href; //history.location.search;
    // alert(params)
    var url = new URL(params);
    var level = url.searchParams.get("level");
    var age = url.searchParams.get("age");
    var gender = url.searchParams.get("class_gender");
    // console.log('123');
    // alert(gender)

    // if (level){

    // var level_array = level.split(',');}
    // if (age){
    // level_array.concat(age.split(','))}
    // if (gender){
    //   if(gender.includes(',')){
    //     level_array.concat(gender.split(','))
    //   }
    // }

    // alert(level_array);

    if (level && level.includes("All")) {
      $("#all-level-checkbox-label").click();
    }
    if (level && level.includes("Intermediate")) {
      $("#Intermediate-checkbox-label").click();
    }
    if (level && level.includes("Advanced")) {
      $("#Advanced-checkbox-label").click();
    }

    if (gender && gender.includes("Female")) {
      $("#Female-checkbox-label").click();
    }

    if (gender && gender.includes("Male")) {
      $("#Male-checkbox-label").click();
    }

    if (gender && gender.includes("Unisex")) {
      $("#Mixed-checkbox-label").click();
    }

    if (age && age.includes("Kids")) {
      $("#Kids-checkbox-label").click();
    }

    if (age && age.includes("Teens")) {
      $("#Teens-checkbox-label").click();
    }

    if (age && age.includes("Adults")) {
      $("#Adults-checkbox-label").click();
    }
  }
  window.onload = function () {
    GetUrlParamas();
  };
  function GetValues() {
    var newurl =
      window.location.protocol + "//" + window.location.host + "explore/";

    var levels = "";
    var age = "";
    var gender = "";
    if ($("#all-level-checkbox").is(":checked")) {
      levels = levels + "All";
    }
    if ($("#Intermediate-level-checkbox").is(":checked")) {
      if (levels === "") {
        levels = levels + "Intermediate";
      } else {
        levels = levels + ",Intermediate";
      }
    }
    if ($("#Advanced-level-checkbox").is(":checked")) {
      if (levels === "") {
        levels = levels + "Advanced";
      } else {
        levels = levels + ",Advanced";
      }
    }

    if ($("#Female-checkbox").is(":checked")) {
      if (gender === "") {
        gender = gender + "Female";
      } else {
        gender = gender + ",Female";
      }
    }

    if ($("#Male-checkbox").is(":checked")) {
      if (gender === "") {
        gender = gender + "Male";
      } else {
        gender = gender + ",Male";
      }
    }

    if ($("#Mixed-checkbox").is(":checked")) {
      if (gender === "") {
        gender = gender + "Unisex";
      } else {
        gender = gender + ",Unisex";
      }
    }

    if ($("#Kids-checkbox").is(":checked")) {
      if (age === "") {
        age = age + "Kids";
      } else {
        age = age + ",Kids";
      }
    }

    if ($("#Teens-checkbox").is(":checked")) {
      if (age === "") {
        age = age + "Teens";
      } else {
        age = age + ",Teens";
      }
    }

    if ($("#Adults-checkbox").is(":checked")) {
      if (age === "") {
        age = age + "Adults";
      } else {
        age = age + ",Adults";
      }
    }

    history.push({ path: newurl }, "", newurl);
    history.push({
      pathname: "/explore",
      search: `?level=` + levels + "&age=" + age + "&class_gender=" + gender,
    });
    window.location.reload();
  }

  useEffect(() => {
    HandleFilterCheckbox();
  }, []);

  return (
    <>
      <button
        className="filter-toggle-btn"
        onClick={(e) => {
          document.querySelector(".Filter").classList.toggle("active-filter");
        }}
      >
        Filter
      </button>
      <div className="Filter">
        <div className="filter-top">
          <h2>Filter</h2>
          <div className="icon-wrapper">
            {/* <p><a onclick={()=>window.location.reload()}>Clear all</a></p> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.443"
              height="17.649"
              viewBox="0 0 15.443 17.649">
              <path
                id="Icon_awesome-trash-alt"
                data-name="Icon awesome-trash-alt"
                d="M1.1,15.994a1.655,1.655,0,0,0,1.655,1.655h9.927a1.655,1.655,0,0,0,1.655-1.655V4.412H1.1ZM10.479,7.17a.552.552,0,1,1,1.1,0v7.721a.552.552,0,1,1-1.1,0Zm-3.309,0a.552.552,0,0,1,1.1,0v7.721a.552.552,0,0,1-1.1,0Zm-3.309,0a.552.552,0,1,1,1.1,0v7.721a.552.552,0,1,1-1.1,0ZM14.891,1.1H10.755L10.431.458A.827.827,0,0,0,9.69,0H5.75a.818.818,0,0,0-.738.458L4.688,1.1H.552A.552.552,0,0,0,0,1.655v1.1a.552.552,0,0,0,.552.552h14.34a.552.552,0,0,0,.552-.552v-1.1A.552.552,0,0,0,14.891,1.1Z"
              />
            </svg> */}
          </div>
        </div>
        <div className={"filter-body"}>
          <div className="checkbox-container">
            <h3>Level</h3>
            <ul className="checboxes">
              <li className="checkbox-wrapper">
                <label for="all-level-checkbox" id="all-level-checkbox-label">
                  <p>All Levels</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="all-level-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label
                  for="Intermediate-level-checkbox"
                  // onClick={()=>Setfunction('Intermediate')}
                  id="Intermediate-checkbox-label"
                >
                  <p>Intermediate</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Intermediate-level-checkbox" />
              </li>
              <li className="checkbox-wrapper">
                <label
                  for="Advanced-level-checkbox"
                  // onClick={()=>Setfunction('Advance')}
                  id="Advanced-checkbox-label"
                >
                  <p>Advanced</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Advanced-level-checkbox" />
              </li>
            </ul>
          </div>

          <div className="checkbox-container">
            <h3>Gender</h3>
            <ul className="checboxes">
              <li className="checkbox-wrapper">
                <label for="Female-checkbox" id="Female-checkbox-label">
                  <p>Female</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Female-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Male-checkbox" id="Male-checkbox-label">
                  <p>Male</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Male-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Mixed-checkbox" id="Mixed-checkbox-label">
                  <p>Mixed</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Mixed-checkbox" />
              </li>
            </ul>
          </div>

          <div className="checkbox-container">
            <h3>Ages</h3>
            <ul className="checboxes">
              <li className="checkbox-wrapper">
                <label for="Kids-checkbox" id="Kids-checkbox-label">
                  <p>Kids (2-12)</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                  </svg>
                </label>
                <input type="checkbox" id="Kids-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Teens-checkbox" id="Teens-checkbox-label">
                  <p>Teens (13-17)</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Teens-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Adults-checkbox" id="Adults-checkbox-label">
                  <p>Adults (18+)</p>

                  <svg
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
                      fill="#fff"
                      stroke="#E1DFDF"
                    />
                    {/* rgba(255,0,0,0.69) */}
                  </svg>
                </label>
                <input type="checkbox" id="Adults-checkbox" />
              </li>
            </ul>
          </div>

          <button
            className={"apply-filter-btn " + cookies.get("theme")}
            onClick={() => GetValues()}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
