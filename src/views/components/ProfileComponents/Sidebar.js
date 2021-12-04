import React, { useEffect, useState } from "react";
import ProfilePic from "../../../assets/img/boy.png";
import ProfilePic1 from "../../../assets/img/grl.jpeg";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import BASE_URL from "../../pages/base";

const cookies = new Cookies();

var gender = cookies.get("gender");
// alert(gender)
var act_class = "activeSidebarLink " + cookies.get("theme");
function Sidebar({ activeLink }) {
  function logout() {
    // debugger
    cookies.remove("uuid");
    cookies.remove("email");
    cookies.remove("user_fullname");
    window.location = "auth/sign-in/";
  }

  const [getgym, setgym] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/gym/" + cookies.get("gym_id"))
      .then((res) => {
        // console.log(res)
        // console.log(cookies.get('email'));
        setgym(res.data);
        // data2 = setgym(res.data);
        // console.clear()
        // debugger;
        console.log(res.data);
      })
      // alert(getgym.gym_image)

      .catch((err) => {
        // console.log(err)
      });
  }, []);

  return (
    <>
      <aside className="profile-mbl-sidebar">
        <div className="profile-mbl-sidebar-header">
          <svg
            className="profile-sidebar-close"
            xmlns="http://www.w3.org/2000/svg"
            width="19.005"
            height="19"
            viewBox="0 0 19.005 19"
          >
            <path
              id="Icon_ionic-ios-close"
              data-name="Icon ionic-ios-close"
              d="M23.039,20.789,29.827,14a1.591,1.591,0,0,0-2.249-2.249L20.79,18.539,14,11.751A1.591,1.591,0,1,0,11.753,14l6.788,6.788-6.788,6.788A1.591,1.591,0,0,0,14,29.826l6.788-6.788,6.788,6.788a1.591,1.591,0,1,0,2.249-2.249Z"
              transform="translate(-11.285 -11.289)"
              fill="#7567fe"
            />
          </svg>

          <div className="profile-mbl-sidebar-header-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.205"
              height="22.249"
              viewBox="0 0 22.205 22.249"
            >
              <g
                id="fcb585d9a7c6fd63dc7aead816a01339"
                transform="translate(-10.003 -9.034)"
              >
                <g
                  id="Group_347"
                  data-name="Group 347"
                  transform="translate(10.003 9.034)"
                >
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M21.878-501.939a11.471,11.471,0,0,1,3.63.881,10.785,10.785,0,0,1,3.457,2.358,11.054,11.054,0,0,1,3.185,6.5,16.056,16.056,0,0,1,0,2.726,11.187,11.187,0,0,1-4.048,7.3,11.274,11.274,0,0,1-8.836,2.312,11.146,11.146,0,0,1-8.764-7.6,10.367,10.367,0,0,1-.5-3.366,10.472,10.472,0,0,1,1.24-5.111,11.15,11.15,0,0,1,8.009-5.856A11.771,11.771,0,0,1,21.878-501.939Zm-.372.931c0,.082-.009,1.095-.014,2.249l-.009,2.1h1.972a17.732,17.732,0,0,0,1.967-.045,15.046,15.046,0,0,0-.731-1.74,14.274,14.274,0,0,0-1.44-2.331L23.068-501l-.491-.055c-.273-.032-.527-.064-.563-.073s-.164-.014-.286-.018C21.519-501.153,21.514-501.153,21.505-501.008Zm-1.649-.1c-.354.041-.423.064-.513.168a18.9,18.9,0,0,0-1.472,2.349,13.311,13.311,0,0,0-.809,1.885,13.6,13.6,0,0,0,1.84.045h1.84v-4.5H20.5C20.374-501.153,20.079-501.13,19.856-501.1Zm-2.167.523a12.071,12.071,0,0,0-1.944.913,11.653,11.653,0,0,0-2.817,2.512c-.159.213-.309.413-.332.441a7,7,0,0,0,1.795.059h1.835l.2-.536A15.506,15.506,0,0,1,17.98-500.3a4.646,4.646,0,0,0,.264-.423C18.244-500.767,18.162-500.744,17.689-500.581Zm6.8.3a16.043,16.043,0,0,1,1.526,3l.241.627h1.7c.931,0,1.695-.009,1.695-.014a11.3,11.3,0,0,0-.822-1.059,10.45,10.45,0,0,0-4.061-2.785C24.213-500.717,24.2-500.708,24.486-500.281Zm2.026,4.416c0,.014.064.273.136.581a18.891,18.891,0,0,1,.5,3.453,3.868,3.868,0,0,0,.027.454l.032.173h2.108a8,8,0,0,0,2.131-.068,7.848,7.848,0,0,0-.191-1.608,11.148,11.148,0,0,0-1-2.808l-.114-.2H28.329C27.33-495.884,26.512-495.874,26.512-495.865Zm-5.02,2.308v2.331l2.462.014,2.467.009v-.259a19.277,19.277,0,0,0-.636-4.1l-.1-.323h-4.2Zm-4.748-2.3c0,.009-.073.3-.159.645a18.368,18.368,0,0,0-.522,3.652v.359l2.326-.009,2.331-.014.014-2.331.009-2.326h-2C17.644-495.884,16.744-495.874,16.744-495.861Zm-4.943.554a10.688,10.688,0,0,0-1.009,3.884v.218h4.489l.027-.332c.014-.177.036-.522.05-.759a17.73,17.73,0,0,1,.459-2.9c.086-.359.155-.659.155-.668s-.877-.018-1.944-.018H12.079ZM27.175-490.2c-.014.159-.036.5-.05.763a17.16,17.16,0,0,1-.459,2.948c-.086.359-.155.659-.155.668s.818.018,1.817.018h1.813l.123-.2a10.7,10.7,0,0,0,.99-2.748,8.364,8.364,0,0,0,.191-1.663,8.816,8.816,0,0,0-2.135-.064H27.2Zm-5.688,2.067,0,2.331H25.69l.1-.323a19.278,19.278,0,0,0,.636-4.1v-.259l-2.467.009-2.462.014Zm-5.424-1.99a18.349,18.349,0,0,0,.522,3.653c.086.345.159.636.159.645s.9.023,2,.023h2v-2.308c0-1.272-.014-2.326-.032-2.34s-1.068-.032-2.34-.032H16.063v.359Zm-5.256.082a10.42,10.42,0,0,0,.545,2.626,11.8,11.8,0,0,0,.627,1.467l.1.168,1.944-.014c1.072,0,1.949-.018,1.949-.032s-.068-.3-.155-.645a18.716,18.716,0,0,1-.481-3.285c0-.136-.014-.359-.027-.491l-.032-.236h-4.5Zm15.16,5.747a19.256,19.256,0,0,1-1.363,2.758,3.852,3.852,0,0,0-.3.536,9.641,9.641,0,0,0,1.458-.591,10.188,10.188,0,0,0,3.176-2.485,8.786,8.786,0,0,0,.682-.9,6.722,6.722,0,0,0-1.667-.055H26.258Zm-4.479,1.508c0,1.236.018,2.258.032,2.276a7.872,7.872,0,0,0,1.295-.118l.282-.05.309-.427a14.455,14.455,0,0,0,1.24-2.058,15.833,15.833,0,0,0,.777-1.817,13.428,13.428,0,0,0-1.967-.05H21.487v2.244Zm-4.425-2.194a12.7,12.7,0,0,0,.7,1.7,10.887,10.887,0,0,0,1.726,2.68,9.2,9.2,0,0,0,1.209.091c.023-.018.041-.927.041-2.276v-2.244H18.9A11.541,11.541,0,0,0,17.062-484.976Zm-4.429.073a10.958,10.958,0,0,0,1.954,2.094,11.055,11.055,0,0,0,2.331,1.436,12.856,12.856,0,0,0,1.331.481c.023,0-.054-.15-.177-.332a15.439,15.439,0,0,1-1.581-3.112l-.264-.691H12.556Z"
                    transform="translate(-10.002 501.966)"
                    fill="#7966ff"
                  />
                </g>
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.278"
              height="21.5"
              viewBox="0 0 19.278 21.5"
            >
              <g
                id="Bell_Icon"
                data-name="Bell Icon"
                transform="translate(-1869.812 -36.961)"
              >
                <path
                  id="Icon_awesome-bell"
                  data-name="Icon awesome-bell"
                  d="M8.889,20a2.52,2.52,0,0,0,2.538-2.5H6.35A2.52,2.52,0,0,0,8.889,20Zm8.547-5.848c-.767-.811-2.2-2.031-2.2-6.027a6.2,6.2,0,0,0-5.077-6.061V1.25a1.269,1.269,0,0,0-2.538,0v.814A6.2,6.2,0,0,0,2.543,8.125c0,4-1.435,5.216-2.2,6.027A1.21,1.21,0,0,0,0,15a1.261,1.261,0,0,0,1.274,1.25H16.5A1.261,1.261,0,0,0,17.778,15a1.209,1.209,0,0,0-.342-.848Z"
                  transform="translate(1870.563 37.711)"
                  fill="none"
                  stroke="#7966ff"
                  stroke-width="1.5"
                />
                <g
                  id="Ellipse_16"
                  data-name="Ellipse 16"
                  transform="translate(1882.432 39.933)"
                  fill="rgba(255,0,0,0.69)"
                  stroke="#f8f8f8"
                  stroke-width="1"
                >
                  <circle cx="2.222" cy="2.222" r="2.222" stroke="none" />
                  <circle cx="2.222" cy="2.222" r="1.722" fill="none" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="profile-sidebar-body">
          <div className="profile-presentation">
            <img src={ProfilePic} />
            <div className="profile-name">
              <span>{cookies.get("user_fullname")}</span>
              <span>{cookies.get("email")}</span>
            </div>
          </div>
          <ul className="profile-sidebar-options">
            <Link to="/dashboard">
              <li
                className={`${
                  activeLink == "dashboard" &&
                  "activeSidebarLink " + cookies.get("theme")
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.2"
                  height="26.2"
                  viewBox="0 0 26.2 26.2"
                >
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M19.65,0V4.913h1.638V0ZM4.913,0V4.913H6.55V0Zm19.65,8.188V24.563H1.638V8.188ZM22.925,26.2A3.275,3.275,0,0,0,26.2,22.925V4.913a3.275,3.275,0,0,0-3.275-3.275h0V4.094a2.456,2.456,0,1,1-4.913,0V1.638H8.188V4.094a2.456,2.456,0,1,1-4.913,0V1.638h0A3.275,3.275,0,0,0,0,4.913V22.925A3.275,3.275,0,0,0,3.275,26.2Z"
                    fill="#040f0f"
                    fill-rule="evenodd"
                  />
                </svg>
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="/explore">
              <li className={`${activeLink == "explore" && act_class}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="Icon_material-explore"
                    data-name="Icon material-explore"
                    d="M18,16.35A1.65,1.65,0,1,0,19.65,18,1.645,1.645,0,0,0,18,16.35ZM18,3A15,15,0,1,0,33,18,15.005,15.005,0,0,0,18,3Zm3.285,18.285L9,27l5.715-12.285L27,9Z"
                    transform="translate(-3 -3)"
                    fill="#040f0f"
                  />
                </svg>

                <span>Explore</span>
              </li>
            </Link>
            <Link to="/Schedule">
              <li
                className={`${activeLink == "schedule" && "activeSidebarLink"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.678"
                  height="22.757"
                  viewBox="0 0 23.678 22.757"
                >
                  <g
                    id="Group_251"
                    data-name="Group 251"
                    transform="translate(-41 -437)"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(41 437)"
                    >
                      <g id="Icons" transform="translate(0)">
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M17.759,0V4.267h1.48V0ZM4.44,0V4.267H5.92V0ZM22.2,7.112V21.335H1.48V7.112Zm-1.48,15.645a2.9,2.9,0,0,0,2.96-2.845V4.267a2.9,2.9,0,0,0-2.96-2.845h0V3.556a2.222,2.222,0,0,1-4.44,0V1.422H7.4V3.556A2.178,2.178,0,0,1,5.18,5.689,2.178,2.178,0,0,1,2.96,3.556V1.422h0A2.9,2.9,0,0,0,0,4.267V19.912a2.9,2.9,0,0,0,2.96,2.845Z"
                          transform="translate(0)"
                          fill="#040f0f"
                          fill-rule="evenodd"
                        />
                      </g>
                    </g>
                    <circle
                      id="Ellipse_18"
                      data-name="Ellipse 18"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(57 445.75)"
                      fill="#040f0f"
                    />
                    <circle
                      id="Ellipse_18-2"
                      data-name="Ellipse 18"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(51 445.75)"
                      fill="#040f0f"
                    />
                    <circle
                      id="Ellipse_18-3"
                      data-name="Ellipse 18"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(45 445.75)"
                      fill="#040f0f"
                    />
                  </g>
                </svg>

                <span>My Schedule</span>
              </li>
            </Link>
            <Link to="/PlanAndPackages">
              <li
                className={`${
                  activeLink == "PlanAndPackages" && "activeSidebarLink"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.339"
                  height="20.339"
                  viewBox="0 0 20.339 20.339"
                >
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M361.53,242.835V234.36h-8.475v8.475Zm11.865,0V234.36H364.92v8.475ZM361.53,254.7v-8.475h-8.475V254.7Zm11.865,0v-8.475H364.92V254.7Z"
                    transform="translate(-353.055 -234.36)"
                    fill="#040f0f"
                    fill-rule="evenodd"
                  />
                </svg>

                <span>Plans & Packages</span>
              </li>
            </Link>
            <Link to="/history">
              <li
                className={`${activeLink == "history" && "activeSidebarLink"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.047"
                  height="21.626"
                  viewBox="0 0 23.047 21.626"
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M20.166,16.211a20.7,20.7,0,0,0-6.511-2.967,15.067,15.067,0,0,0,1.988-3.961,9.031,9.031,0,0,0,.2-2.967,13.18,13.18,0,0,0,0-3.025A3.99,3.99,0,0,0,11.523.006,4,4,0,0,0,7.2,3.29a15.081,15.081,0,0,0,0,3.025,7.692,7.692,0,0,0,.317,2.967,13.151,13.151,0,0,0,1.815,3.961,21.275,21.275,0,0,0-6.453,2.967C0,17.565,0,19.091,0,19.091v.576a2.218,2.218,0,0,0,2.1,1.945H20.915a2.1,2.1,0,0,0,2.132-2.06v-.49S23.047,17.565,20.166,16.211Z"
                    transform="translate(0 0.013)"
                    fill="#040f0f"
                    fill-rule="evenodd"
                  />
                </svg>
                <span>History</span>
              </li>
            </Link>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M21.991,17.091a1.837,1.837,0,0,0,.368,2.027l.067.067a2.229,2.229,0,1,1-3.152,3.152l-.067-.067a1.852,1.852,0,0,0-3.14,1.314v.189a2.227,2.227,0,0,1-4.455,0v-.1a1.837,1.837,0,0,0-1.2-1.682,1.837,1.837,0,0,0-2.027.367l-.067.067a2.229,2.229,0,1,1-3.152-3.152l.067-.067a1.852,1.852,0,0,0-1.314-3.14H3.727a2.227,2.227,0,0,1,0-4.455h.1a1.837,1.837,0,0,0,1.682-1.2,1.837,1.837,0,0,0-.367-2.027l-.067-.067A2.229,2.229,0,1,1,8.226,5.164l.067.067A1.837,1.837,0,0,0,10.32,5.6h.089a1.837,1.837,0,0,0,1.114-1.682V3.727a2.227,2.227,0,0,1,4.455,0v.1a1.852,1.852,0,0,0,3.14,1.314l.067-.067a2.229,2.229,0,1,1,3.152,3.152l-.067.067A1.837,1.837,0,0,0,21.9,10.32v.089a1.837,1.837,0,0,0,1.682,1.114h.189a2.227,2.227,0,0,1,0,4.455h-.1a1.837,1.837,0,0,0-1.682,1.114Z"
                  transform="translate(-0.75 -0.75)"
                  fill="none"
                  stroke="#040f0f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M20.182,16.841A3.341,3.341,0,1,1,16.841,13.5,3.341,3.341,0,0,1,20.182,16.841Z"
                  transform="translate(-3.841 -3.842)"
                  fill="none"
                  stroke="#040f0f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>

              <span>Settings</span>
            </li>
            <li>
              <NavLink
                className="side-logout-a"
                to="/auth/sign-in"
                onClick={logout}
              >
                <svg
                  id="Icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.291"
                  height="22.802"
                  viewBox="0 0 21.291 22.802"
                >
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M12.165,10.645V0H9.124V10.645ZM0,12.165A10.645,10.645,0,1,0,15.207,2.539V6.083a7.6,7.6,0,1,1-9.124,0V2.539A10.645,10.645,0,0,0,0,12.165Z"
                    transform="translate(0)"
                    fill="#040f0f"
                    fill-rule="evenodd"
                  />
                </svg>
                <span>Log Out</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <span className="powered-by">Powered by floey</span> */}
      </aside>
      <div className="profile-sidebar">
        <div className="profile-pic">
          {/* {gender==="Male" ? <img src={ProfilePic}></img>: <img src={ProfilePic1}></img>} */}
          <img src={BASE_URL.slice(0, -1) + getgym.gym_image}></img>
        </div>

        <ul className="profile-sidebar-options">
          <Link to="/dashboard">
            <li
              className={`dashboard-desktop-option ${
                activeLink == "dashboard" &&
                "activeSidebarLink " + cookies.get("theme")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.2"
                height="26.2"
                viewBox="0 0 26.2 26.2"
              >
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M19.65,0V4.913h1.638V0ZM4.913,0V4.913H6.55V0Zm19.65,8.188V24.563H1.638V8.188ZM22.925,26.2A3.275,3.275,0,0,0,26.2,22.925V4.913a3.275,3.275,0,0,0-3.275-3.275h0V4.094a2.456,2.456,0,1,1-4.913,0V1.638H8.188V4.094a2.456,2.456,0,1,1-4.913,0V1.638h0A3.275,3.275,0,0,0,0,4.913V22.925A3.275,3.275,0,0,0,3.275,26.2Z"
                  fill="#040f0f"
                  fill-rule="evenodd"
                />
              </svg>
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/explore">
            <li
              className={`${
                activeLink == "explore" &&
                "activeSidebarLink " + cookies.get("theme")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="Icon_material-explore"
                  data-name="Icon material-explore"
                  d="M18,16.35A1.65,1.65,0,1,0,19.65,18,1.645,1.645,0,0,0,18,16.35ZM18,3A15,15,0,1,0,33,18,15.005,15.005,0,0,0,18,3Zm3.285,18.285L9,27l5.715-12.285L27,9Z"
                  transform="translate(-3 -3)"
                  fill="#040f0f"
                />
              </svg>

              <span>Explore</span>
            </li>
          </Link>

          <Link to="/Schedule">
            <li
              className={`${
                activeLink == "schedule" &&
                "activeSidebarLink " + cookies.get("theme")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.678"
                height="22.757"
                viewBox="0 0 23.678 22.757"
              >
                <g
                  id="Group_251"
                  data-name="Group 251"
                  transform="translate(-41 -437)"
                >
                  <g
                    id="Layer_2"
                    data-name="Layer 2"
                    transform="translate(41 437)"
                  >
                    <g id="Icons" transform="translate(0)">
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M17.759,0V4.267h1.48V0ZM4.44,0V4.267H5.92V0ZM22.2,7.112V21.335H1.48V7.112Zm-1.48,15.645a2.9,2.9,0,0,0,2.96-2.845V4.267a2.9,2.9,0,0,0-2.96-2.845h0V3.556a2.222,2.222,0,0,1-4.44,0V1.422H7.4V3.556A2.178,2.178,0,0,1,5.18,5.689,2.178,2.178,0,0,1,2.96,3.556V1.422h0A2.9,2.9,0,0,0,0,4.267V19.912a2.9,2.9,0,0,0,2.96,2.845Z"
                        transform="translate(0)"
                        fill="#040f0f"
                        fill-rule="evenodd"
                      />
                    </g>
                  </g>
                  <circle
                    id="Ellipse_18"
                    data-name="Ellipse 18"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(57 445.75)"
                    fill="#040f0f"
                  />
                  <circle
                    id="Ellipse_18-2"
                    data-name="Ellipse 18"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(51 445.75)"
                    fill="#040f0f"
                  />
                  <circle
                    id="Ellipse_18-3"
                    data-name="Ellipse 18"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(45 445.75)"
                    fill="#040f0f"
                  />
                </g>
              </svg>

              <span>My Schedule</span>
            </li>
          </Link>

          <Link to="/PlanAndPackages">
            <li
              className={`${
                activeLink == "PlanAndPackages" &&
                "activeSidebarLink " + cookies.get("theme")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.339"
                height="20.339"
                viewBox="0 0 20.339 20.339"
              >
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M361.53,242.835V234.36h-8.475v8.475Zm11.865,0V234.36H364.92v8.475ZM361.53,254.7v-8.475h-8.475V254.7Zm11.865,0v-8.475H364.92V254.7Z"
                  transform="translate(-353.055 -234.36)"
                  fill="#040f0f"
                  fill-rule="evenodd"
                />
              </svg>

              <span>Plans & Packages</span>
            </li>
          </Link>
          <Link to="/history">
            <li
              className={`${
                activeLink == "history" &&
                "activeSidebarLink " + cookies.get("theme")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.047"
                height="21.626"
                viewBox="0 0 23.047 21.626"
              >
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M20.166,16.211a20.7,20.7,0,0,0-6.511-2.967,15.067,15.067,0,0,0,1.988-3.961,9.031,9.031,0,0,0,.2-2.967,13.18,13.18,0,0,0,0-3.025A3.99,3.99,0,0,0,11.523.006,4,4,0,0,0,7.2,3.29a15.081,15.081,0,0,0,0,3.025,7.692,7.692,0,0,0,.317,2.967,13.151,13.151,0,0,0,1.815,3.961,21.275,21.275,0,0,0-6.453,2.967C0,17.565,0,19.091,0,19.091v.576a2.218,2.218,0,0,0,2.1,1.945H20.915a2.1,2.1,0,0,0,2.132-2.06v-.49S23.047,17.565,20.166,16.211Z"
                  transform="translate(0 0.013)"
                  fill="#040f0f"
                  fill-rule="evenodd"
                />
              </svg>
              <span>History</span>
            </li>
          </Link>
          <li>
            <NavLink
              className="side-logout-a"
              to="/auth/sign-in"
              onClick={logout}
            >
              <svg
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                width="21.291"
                height="22.802"
                viewBox="0 0 21.291 22.802"
              >
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M12.165,10.645V0H9.124V10.645ZM0,12.165A10.645,10.645,0,1,0,15.207,2.539V6.083a7.6,7.6,0,1,1-9.124,0V2.539A10.645,10.645,0,0,0,0,12.165Z"
                  transform="translate(0)"
                  fill="#040f0f"
                  fill-rule="evenodd"
                />
              </svg>

              <span>Log Out</span>
            </NavLink>
          </li>
        </ul>

        <span className="powered-by">Powered by floey</span>
      </div>
    </>
  );
}

export default Sidebar;
