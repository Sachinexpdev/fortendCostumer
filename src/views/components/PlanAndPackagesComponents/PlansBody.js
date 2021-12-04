import React, { useEffect, useState } from "react";
import ProfilePic from "../../../assets/img/profile-pic.png";
import PlansCard from "./PlansCard";
import HeaderF from "../../../assets/img/f.svg";
import BASE_URL from "../../pages/base";

import Cookies from "universal-cookie";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../../assets/img/loader";

import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import $ from "jquery";
import { toastr } from "react-redux-toastr";

const cookies = new Cookies();
cookies.get("data");

function PlansBody() {
  const [Packages, SetPackages] = useState(true);
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState("false");

  const [amount, setAmount] = useState(0);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const axios = require("axios");
  const [packages, getpackages] = useState([]);
  const [membership, getmembership1] = useState([]);
  const cookies = new Cookies();
  console.log(cookies.get("gym_id"));

  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/packages/?gym_id=" + cookies.get("gym_id"))
      .then((res) => {
        console.log(res);
        console.log(cookies.get("uuid"));
        // window.reload()
        getpackages(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/membership/?gym_id=" + cookies.get("gym_id"))
      .then((res) => {
        console.log(res);
        console.log(cookies.get("uuid"));
        getmembership1(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  function ApplyPromocode(price) {
    // debugger
    alert(price);
    var url = BASE_URL + "payments/promo";
    // var gym = ;
    // var uuid = ;
    var code = document.getElementById("code").value;
    var i_amount = price;
    var config = {
      method: "post",
      url: url,
      data: {
        gym: cookies.get("gym_id"),
        uuid: cookies.get("uuid"),
        initial_amount: i_amount,
        coupon_code: code,
      },
    };
    axios(config)
      .then((re) => {
        cookies.set("price", re.data.data.final_price, { path: "/" });
        alert(re.data.data.final_price);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function logout() {
    // debugger
    cookies.remove("uuid");
    cookies.remove("email");
    cookies.remove("user_fullname");
    window.location = "auth/sign-in/";
  }

  // **********package purchase***********

  async function packagepuchase(data) {
    // console.clear();
    console.log("data>>>>>>>>>>>>>", data);
    let cokkiesData = {
      subscription_user: cookies.get("uuid"),
      // package_purchased:cookies.get('package_purchased'),
      // package_purchased:data.package_name,
      // package_class_passes:data.class_count,

      gym: cookies.get("gym_id"),
      package_id: cookies.get("pack_uuid"),
      package_purchased: cookies.get("title"),
      package_class_passes: cookies.get("class_passes"),
      passes: cookies.get("class_passes"),
    };
    console.log("cookiesData", cokkiesData);
    // debugger

    {
      console.log("Trying to send request");
      // alert(data.uuid)

      console.log(data);
      try {
        $(".laoder").show();
        // console.log("basae_url", BASE_URL +)
        let res = await axios.post(BASE_URL + "user/subscription/user/", {
          subscription_user: cookies.get("uuid"),
          // package_purchased:cookies.get('package_purchased'),
          // package_purchased:data.package_name,
          // package_class_passes:data.class_count,

          gym: cookies.get("gym_id"),
          package_id: cookies.get("pack_uuid"),
          package_purchased: cookies.get("title"),
          package_class_passes: cookies.get("class_passes"),
          passes: cookies.get("class_passes"),
        });
        console.log("res>>>>>>>>>>>>>>>>>>>>>>>>", res);
        if (res.status === 200) {
          // debugger
          cookies.remove("pack_uuid", { path: "/" });
          toastr.success("Payment Sucessfully Done");
          console.log(res.status);
          console.log(cookies.get("uuid"));
          console.log(res.data);

          setTimeout(function () {
            window.location = "/dashboard";
          }, 3000);
        }

        if (res.status === 404) {
          // debugger
          // console.log(res);
          alert(res.status);
        }
        // debugger
        // Don't forget to return something
        return res.data;
      } catch (err) {
        console.log(err.res);
        // console.error('Signup Failed , Please try again.');
        $(".laoder").hide();
        toastr.error("payment Not Done.");
        setTimeout(function () {}, 3000);
        alert(err);
      }
    }
  }

  function package_price(uuid, id, title, class_passes) {
    // debugger
    // alert(id)
    // alert(title)
    // $('#x').html='';
    // document.getElementById("x").innerHTML='';
    // $('#x').append("<h2>Amount: "+id.package_price+"</h2>")

    // cookies.set('id',id,{path:'/PlanAndPackages'})
    setAmount(id);
    cookies.set("pack_uuid", uuid, { path: "/" });
    // cookies.set('mem_uuid',uuid,{path:'/'})
    cookies.set("title", title, { path: "/" });
    cookies.set("class_passes", class_passes, { path: "/" });
    // cookies.set('class_passes',membership_description,{path:'/'})
  }

  //   function what(){
  //     document.getElementById('hello').innerHTML = 'hi';
  // };

  // ============GymPRofile==========
  const [getgym, setgym] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/gym/" + cookies.get("gym_id"))
      .then((res) => {
        //   console.log(res)
        setgym(res.data);
        //   console.log(getgym[0].gym_name)
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  // ===========SelectGym===========

  const [getgym1, setgym1] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "user/select/gym/?uuid=" + cookies.get("uuid"))
      .then((res) => {
        console.log(res);
        setgym1(res.data.context);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  // function Choosegym(data,theme){
  //     // debugger
  //     cookies.set('gym_id',data,{path:'/'});
  //     cookies.set('theme',theme,{path:'/'});
  //     console.log(cookies.get('gym_id'));
  //     window.location.href='/PlanAndPackages'
  // }

  return (
    <>
      <div className="PlansBody ">
        <div class="laoder plans">
          {" "}
          <img src={Loader} />
        </div>
        <div className="profile-body-header">
          <div className="profile-label">
            <p>{getgym.gym_name}</p>

            <NavLink className="zind-9" to="/Home">
              <img src={HeaderF} />
            </NavLink>
          </div>

          {/* ***********Choosegym**************** */}
          {/* <div className="dash-btn-mn">
          {getgym1.map((data,index)=>{
          if(data.gym!==cookies.get('gym_id')){

          return <div className="pro-btn-m" style={{zIndex:887-index}}><NavLink className={"zind-9 "+data.theme} onClick={()=>Choosegym(data.gym,data.theme)} to="/dashboard">
          
          {data.gym_initial}
          </NavLink></div>
}
          })}
          </div> */}
          {/* ********************************** */}

          {/* {getgym.map(data=>( */}
          {/*           
          <div className="header-gym-btn-main-2">
        <a href='/Dashboard'><button className="btn-gym-2">  </button></a>
      </div> */}

          {/* <div className="rd-btn-main two">
      {getgym1.map(data=>(
      <div className="header-gym-btn-main-2">
        <a href='/Dashboard'><button onClick={()=>Choosegym(data.gym)}
        className="btn-gym-2"> {data.gym_initial} </button></a>
      </div>))}
      </div>  */}

          <div className="profile-area">
            <div className="profile-presentation set-mn">
              <NavLink className="zind-9" to="/profile">
                <img src={ProfilePic} />
              </NavLink>
              <div className="profile-name ">
                <NavLink className="zind-9" to="/profile">
                  <span>{cookies.get("user_fullname")}</span>
                  <span>{cookies.get("email")}</span>
                </NavLink>
              </div>
              <div className="set-drop">
                <ul>
                  <li>
                    <NavLink to="/profile">
                      <center> Profile </center>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="logout-red" to="/auth/sign-in">
                      <center> Log Out </center>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <svg
              className="burger-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="19"
              viewBox="0 0 27 19"
            >
              <g id="Menu" transform="translate(-17 -21)">
                <rect
                  id="Rectangle_180"
                  data-name="Rectangle 180"
                  width="27"
                  height="3"
                  rx="1.5"
                  transform="translate(17 21)"
                  fill="#7966ff"
                />
                <rect
                  id="Rectangle_181"
                  data-name="Rectangle 181"
                  width="27"
                  height="3"
                  rx="1.5"
                  transform="translate(17 29)"
                  fill="#7966ff"
                />
                <rect
                  id="Rectangle_182"
                  data-name="Rectangle 182"
                  width="27"
                  height="3"
                  rx="1.5"
                  transform="translate(17 37)"
                  fill="#7966ff"
                />
              </g>
            </svg>

            <div className="notif-d-main">
              <svg
                onClick={handleToggle}
                className="header-nofication-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="25.5"
                height="28.5"
                viewBox="0 0 25.5 28.5"
              >
                <g
                  id="Bell_Icon"
                  data-name="Bell Icon"
                  transform="translate(-1869.812 -36.961)"
                >
                  <path
                    id="Icon_awesome-bell"
                    data-name="Icon awesome-bell"
                    d="M12,27a3.4,3.4,0,0,0,3.427-3.375H8.573A3.4,3.4,0,0,0,12,27Zm11.539-7.895c-1.035-1.095-2.972-2.742-2.972-8.136a8.363,8.363,0,0,0-6.854-8.182v-1.1a1.713,1.713,0,0,0-3.426,0v1.1a8.363,8.363,0,0,0-6.854,8.182c0,5.395-1.937,7.042-2.972,8.136A1.634,1.634,0,0,0,0,20.25a1.7,1.7,0,0,0,1.72,1.688H22.28A1.7,1.7,0,0,0,24,20.25a1.633,1.633,0,0,0-.461-1.145Z"
                    transform="translate(1870.563 37.711)"
                    fill="none"
                    stroke="#7966ff"
                    stroke-width="1.5"
                  />
                  <g
                    id="Ellipse_16"
                    data-name="Ellipse 16"
                    transform="translate(1886.587 40.711)"
                    fill="rgba(255,0,0,0.69)"
                    stroke="#f8f8f8"
                    stroke-width="1"
                  >
                    <circle cx="3" cy="3" r="3" stroke="none" />
                    <circle cx="3" cy="3" r="2.5" fill="none" />
                  </g>
                </g>
              </svg>

              <div
                className={
                  isActive ? "notifi-d-102 " : "notifi-d-102 open-drop"
                }
              >
                <ul className="header-notifi-ul">
                  <li>
                    <div className="notifi-left-img">
                      {/* <img src="assets/images/3.jpg" /> */}
                    </div>
                    <div className="notifi-right-cont-1">
                      <div className="noti-text-1">
                        <p className="p1"> Golden gym </p>
                        <p className="p2"> Aug 20,2021 </p>
                      </div>
                      <div className="notifi-text-2">
                        <p>
                          {" "}
                          <span> Class Booked : </span> Abdominal Crunches{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="plans-information text-t">
          <div className="navigation-buttons">
            <h1>Plans & Packages</h1>

            {/* <button
            className={`${Packages == true && "active"}`}
            onClick={(e) => SetPackages(true)}>
            Packages
          </button> */}
            {/* <button
            className={`${Packages == false && "active"}`}
            onClick={(e) => SetPackages(false)}>
            Memberships
          </button> */}
          </div>

          {Packages == true ? (
            <div className="packages">
              {packages.map((data) => (
                <div className="PlansCard">
                  <h1>{data.package_name}</h1>
                  <p className="PlansCardClass">
                    {data.class_count} Class pass
                  </p>
                  <small>Valid Upto {data.package_duration} Weeks </small>
                  <p className="price">
                    {data.package_price} <span>KWD</span>
                  </p>
                  <button
                    className={"buy-button " + cookies.get("theme")}
                    onClick={() => {
                      onOpenModal();
                      package_price(
                        data.uuid,
                        data.package_price,
                        data.package_name,
                        data.class_count
                      );
                    }}
                  >
                    Buy
                  </button>

                  {/* onClick={()=>package_price(data)} */}
                </div>
              ))}
            </div>
          ) : (
            <div className="membership">
              {membership.map((data) => (
                <div className="PlansCard">
                  <h1>{data.membership_title}</h1>
                  <p className="PlansCardClass">
                    {data.membership_description} Class pass
                  </p>
                  <small>Valid Upto {data.membership_duration} Weeks </small>
                  <p className="price">
                    {data.membership_amount} <span>KWD</span>
                  </p>
                  <button
                    className="buy-button"
                    onClick={() => {
                      onOpenModal();
                      package_price(
                        data.uuid,
                        data.membership_amount,
                        data.membership_title,
                        data.membership_description
                      );
                    }}
                  >
                    Buy
                  </button>
                  {/* onClick={()=>package_price(data)} */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ************MODAL FORM********** */}

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Amount :{amount}</h2>

        <div className="col-md-12 m-auto buy-modal-main">
          <div id="x"></div>
          {/* <div class="form-group">
                <input type="text" class="form-control" defaultValue={cookies.get("title")} />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" defaultValue={cookies.get("class_passes")} />
              </div> */}

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Email"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Card Number"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="MM / YY"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="CVV"
            />
          </div>

          <div class="form-group promo-code-inp-main">
            <input
              id="code"
              type="text"
              class="form-control"
              name="email"
              placeholder="Promo code"
            />
            <span class="input-group-addon">
              {" "}
              <button
                onClick={() =>
                  ApplyPromocode(cookies.get("data").package_price)
                }
                className="btn-apply-pc"
              >
                {" "}
                Apply{" "}
              </button>{" "}
            </span>
          </div>

          <div class="modal-footer py-footer">
            <div className="col-md-12 text-center">
              <button
                type="button"
                onClick={() => packagepuchase(cookies.get("data"))}
                class="btn-paynow"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PlansBody;

// function Filter() {

//   const [filter, setFilter] = useState([]);

//   function Setfunction (query){
//     debugger
//     console.log(query)
//     console.log("chalu ho gya h kaaam")
//     var url=BASE_URL + 'gymprofile/classList/?class_gender='+"Female";
//       axios.get(url).then(res=>{
//         console.log(res)
//         setFilter(res.data)
//         console.log(filter)
//       })
//   }

// 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     password github
