import React from "react";

function NewsPopup() {
  return (
    <div className="NewsPopup" style={{ display: "none" }}>
      <div className="pop-up-content">
        <svg
          onClick={(e) => {
            document.querySelector(".NewsPopup").style.display = "none";
          }}
          className="close-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="22.036"
          height="22.036"
          viewBox="0 0 22.036 22.036">
          <g id="X" transform="translate(-1215.85 -348.671)">
            <line
              id="Line_33"
              data-name="Line 33"
              x2="20.622"
              y2="20.622"
              transform="translate(1216.558 349.378)"
              fill="none"
              stroke="#030000"
              stroke-width="2"
            />
            <line
              id="Line_34"
              data-name="Line 34"
              x1="20.622"
              y2="20.622"
              transform="translate(1216.558 349.378)"
              fill="none"
              stroke="#030000"
              stroke-width="2"
            />
          </g>
        </svg>
        <div className="news-content-inner">
          <h2 className="main-heading">News</h2>
          <h3 className="news-heading">Haraka Center of Movement Arts</h3>
          <span>Joined the floey community. </span>
          <div className="more-information">
            <div className="desc-area">
              <h3>Description</h3>
              <span>
                Haraka is a health and wellness studio for women and girls from
                the age 4. We offer mat classes, reform and stability chair
                classes, barre workout and yoga.
              </span>
            </div>
            <div className="hours-area">
              <h3>Hours</h3>
              <span>9:30am - 9:00pm</span>
            </div>
            <div className="tel-area">
              <h3>Tel</h3>
              <span>12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPopup;
