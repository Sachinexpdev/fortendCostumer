import React from "react";
import PersonRun from "../../../assets/img/person-run.svg";
import Cookies from 'universal-cookie'
const cookies = new Cookies();


function BoxThree() {
  return (
    <div className="explore-class-box bx-3">
        <div className="book-class-container">
        <div className="book-class-container-left">
            <p>PILATES 3</p>
            <h4>All Levels</h4>
            <p>09:00 AM(60 min)</p>
        </div>
         <div className={"book-class-container-right"}>    
                <button className={cookies.get("theme")}>BOOK CLASS</button>
              </div>
        </div>
    </div>
  );
}

export default BoxThree;
