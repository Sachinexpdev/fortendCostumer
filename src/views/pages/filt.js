import React, { useEffect,useState } from "react";
import { HandleFilterCheckbox } from "../../../assets/js/Events/HandleFilterCheckbox";
import BASE_URL from "../../pages/base";
import axios from 'axios';


function Filter() {

  const [filter, setFilter] = useState([]);


  function Setfunction (query){
    debugger
    // alert("hhhhhhhhhhh")
    console.log("chalu ho gya h kaaam")
    var url=BASE_URL + 'gymprofile/classList/?search='+query;
      axios.get(url).then(res=>{
        console.log(res)
        setFilter(res.data)
        console.log(filter)
      })
    
    // useEffect(() => {
    //   HandleFilterCheckbox();
    // }, []);
  }
 
  


  return (
    <>
      <button
        className="filter-toggle-btn"
        onClick={(e) => {
          document.querySelector(".Filter").classList.toggle("active-filter");
        }}>
        Filter
      </button>
      <form className="Filter">
        <div className="filter-top">
          <h2>Filter</h2>
          <div className="icon-wrapper">
            <p>Clear all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.443"
              height="17.649"
              viewBox="0 0 15.443 17.649">
              <path
                id="Icon_awesome-trash-alt"
                data-name="Icon awesome-trash-alt"
                d="M1.1,15.994a1.655,1.655,0,0,0,1.655,1.655h9.927a1.655,1.655,0,0,0,1.655-1.655V4.412H1.1ZM10.479,7.17a.552.552,0,1,1,1.1,0v7.721a.552.552,0,1,1-1.1,0Zm-3.309,0a.552.552,0,0,1,1.1,0v7.721a.552.552,0,0,1-1.1,0Zm-3.309,0a.552.552,0,1,1,1.1,0v7.721a.552.552,0,1,1-1.1,0ZM14.891,1.1H10.755L10.431.458A.827.827,0,0,0,9.69,0H5.75a.818.818,0,0,0-.738.458L4.688,1.1H.552A.552.552,0,0,0,0,1.655v1.1a.552.552,0,0,0,.552.552h14.34a.552.552,0,0,0,.552-.552v-1.1A.552.552,0,0,0,14.891,1.1Z"
              />
            </svg>
          </div>
        </div>


        <div className="filter-body">
          <div className="checkbox-container">
            <h3>Level</h3>
            <ul className="checboxes">
              <li className="checkbox-wrapper">
                <label for="all-level-checkbox" onChange={()=>Filter('gym')} id="all-level-checkbox-label">
                <input onChange={()=>this.FilterClasses('gym')} type="checkbox" />
                  <p>All Levels</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                  for="Beginner-level-checkbox"
                  id="Beginner-checkbox-label">
                  <p>Beginner</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                <input type="checkbox" id="Beginner-level-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label
                  for="Intermediate-level-checkbox"
                  id="Intermediate-checkbox-label">
                  <p>Intermediate</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                  id="Advanced-checkbox-label">
                  <p>Advanced</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                {/* <div onChange={()=>this.Filter('F')} class="right-text"> <p>Female</p> </div> */}
                  <p>Female</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                    viewBox="0 0 12.535 12.535">
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
                    viewBox="0 0 12.535 12.535">
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
            <h3>Type</h3>
            <ul className="checboxes">
              <li className="checkbox-wrapper">
                <label
                  for="Contemporary-checkbox"
                  id="Contemporary-checkbox-label">
                  <p>Contemporary</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                <input type="checkbox" id="Contemporary-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Ballet-checkbox" id="Ballet-checkbox-label">
                  <p>Ballet</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                <input type="checkbox" id="Ballet-checkbox" />
              </li>

              <li className="checkbox-wrapper">
                <label for="Modern-checkbox" id="Modern-checkbox-label">
                  <p>Modern</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.535"
                    height="12.535"
                    viewBox="0 0 12.535 12.535">
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
                <input type="checkbox" id="Modern-checkbox" />
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
                    viewBox="0 0 12.535 12.535">
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
                    viewBox="0 0 12.535 12.535">
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
                    viewBox="0 0 12.535 12.535">
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

          <button className="apply-filter-btn">Apply Filters</button>
        </div>
      </form>
    </>
  );
}

export default Filter;
