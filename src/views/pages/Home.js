import React from "react";
import ExploreBusiness from "../components/HomeComponents/ExploreBusiness";
import Header from "../components/HomeComponents/Header";
import "../../assets/css/Home.css";
import HomeSideBar from "../components/HomeComponents/HomeSideBar";
import NewsPopup from "../components/HomeComponents/NewsPopup";
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";

const cookies = new Cookies();
function Home() {

  function logout(){
    // debugger
    // cookies.remove('uuid')
    cookies.remove('email')
    cookies.remove('user_fullname')
    window.location = "auth/sign-in/"
}
  return (
    <div className="Home">
      <Header />
      <HomeSideBar />
      <NewsPopup />
      <div className="home-body">
        <div className="home-body-left">
          <div className="home-body-left-presentation">
        
            <h2 className="home-main-heading">Hello {cookies.get('user_fullname')},</h2>
            <h4 className="home-primary-heading">Start booking your class!</h4>
            <span>Search for local gyms & studios</span>
          </div>
          <ExploreBusiness />
        </div>
        <div className="home-body-right">
          <div className="book-class">
            <h2 className="main-heading">Explore</h2>
            <div className="footer">
              <div className="footer-content">
                <div className="footer-left">
                  <h2>PILATES</h2>
                  <h3>By Haraka</h3>
                  <span>09:00 AM(60 min)</span>
                </div>
                <div className="book-class-button-wrapper">
                  <button>BOOK CLASS</button>
                </div>
              </div>
            </div>
          </div>

          <div className="News-area">
            <h2 className="main-heading">News</h2>

            <nav>
              <li>
                Haraka Center
                <span>Joined the floey community</span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(".NewsPopup").style.display = "flex";
                  }}>
                  Learn more
                </a>
              </li>
              <li className="list-with-no-heading">
                <span>
                  Don't forget to wear your mask. Strict regulation in place
                </span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(".NewsPopup").style.display = "flex";
                  }}>
                  Learn more
                </a>
              </li>
              <li className="list-with-no-heading">
                <span>Happy National Day!</span>
              </li>
            </nav>
          </div>

          <div className="logout-area">
            <div className="logout-area-top">

            <NavLink to="/auth/sign-in" onClick={logout}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.205"
                height="20.338"
                viewBox="0 0 19.205 20.338">
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M10.973,9.494V0H8.23V9.494ZM0,10.85A9.615,9.615,0,0,0,18.789,13.6,9.458,9.458,0,0,0,13.717,2.265v3.16a6.738,6.738,0,0,1,2.391,7.57,6.883,6.883,0,0,1-13.013,0,6.738,6.738,0,0,1,2.391-7.57V2.265A9.486,9.486,0,0,0,0,10.85Z"
                  fill="#040f0f"
                  fill-rule="evenodd"
                />
              </svg>
              
              <span className="logout-title">Log Out</span>
              
              </NavLink>
              
            </div>
            <span>Powered by floey</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
