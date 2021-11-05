import React from "react";
import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";
function Header({ text, link, displayLink }) {
  return (
    <div className="LoginHeader">
      <div className="loginheadercontent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="19"
          viewBox="0 0 27 19">
          <g id="Menu" transform="translate(-17 -21)">
            <rect
              id="Rectangle_180"
              data-name="Rectangle 180"
              width="27"
              height="3"
              rx="1.5"
              transform="translate(17 21)"
              fill="#fff"
            />
            <rect
              id="Rectangle_181"
              data-name="Rectangle 181"
              width="27"
              height="3"
              rx="1.5"
              transform="translate(17 29)"
              fill="#fff"
            />
            <rect
              id="Rectangle_182"
              data-name="Rectangle 182"
              width="27"
              height="3"
              rx="1.5"
              transform="translate(17 37)"
              fill="#fff"
            />
          </g>
        </svg>

        <img src={logo} />
        <p>
          {text} <Link to={link}>{displayLink}</Link>
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.278"
          height="21.5"
          viewBox="0 0 19.278 21.5">
          <g
            id="Bell_Icon"
            data-name="Bell Icon"
            transform="translate(-1869.812 -36.961)">
            <path
              id="Icon_awesome-bell"
              data-name="Icon awesome-bell"
              d="M8.889,20a2.52,2.52,0,0,0,2.538-2.5H6.35A2.52,2.52,0,0,0,8.889,20Zm8.547-5.848c-.767-.811-2.2-2.031-2.2-6.027a6.2,6.2,0,0,0-5.077-6.061V1.25a1.269,1.269,0,0,0-2.538,0v.814A6.2,6.2,0,0,0,2.543,8.125c0,4-1.435,5.216-2.2,6.027A1.21,1.21,0,0,0,0,15a1.261,1.261,0,0,0,1.274,1.25H16.5A1.261,1.261,0,0,0,17.778,15a1.209,1.209,0,0,0-.342-.848Z"
              transform="translate(1870.563 37.711)"
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
            />
            <g
              id="Ellipse_16"
              data-name="Ellipse 16"
              transform="translate(1882.432 39.933)"
              fill="rgba(255,0,0,0.69)"
              stroke="#f8f8f8"
              stroke-width="1">
              <circle cx="2.222" cy="2.222" r="2.222" stroke="none" />
              <circle cx="2.222" cy="2.222" r="1.722" fill="none" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Header;
