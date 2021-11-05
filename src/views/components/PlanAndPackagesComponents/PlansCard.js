import React from "react";
import Cookies from "universal-cookie";
// import React, { useEffect,useState } from "react";

// import axios from 'axios';
// import { Link, NavLink } from "react-router-dom";
// import $ from "jquery";
// import BASE_URL from "../../pages/base";

// function PlansCard({ packageName, Class, valid, price }) {
  const cookies = new Cookies();
  function PlansCard({ package_name, class_count, package_duration, package_price }) {

  // const axios = require('axios');

  // const [packages, getpackages] = useState([])
  
  // console.log(cookies.get('gym_id'))

  // useEffect(() => {
  //   axios
  //     .get(BASE_URL + 'gymprofile/packages/?gym_id=' + cookies.get('gym_id'))
  //     .then(res => {
  //       console.log(res)
  //       console.log(cookies.get('uuid'));
  //       getpackages(res.data)
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //     })
  // }, [])


  // function ApplyPromocode(price){
  //   debugger
  //   alert(price);
  //   var url = BASE_URL+'payments/promo';
  //   // var gym = ;
  //   // var uuid = ;
  //   var code = document.getElementById('code').value;
  //   var i_amount = price
  //   var config={
  //     method:'post',
  //     url:url,
  //     data:{gym:cookies.get('gym_id'),uuid:cookies.get('uuid'),initial_amount:i_amount,coupon_code:code}
  //   }
  //   axios(config).then(re=>{
  //     cookies.set('price',re.data.data.final_price,{path:'/'});
  //     alert(re.data.data.final_price);
  //   }).catch(err=>{
  //     alert(err)
  //   })


  // }
  // async function packagepuchase(data){
  //   // console.log(data);

  //   {         
  //       console.log('Trying to send request');
        
  //       try {
            
  //           let res = await axios.post(BASE_URL + 'user/subscription/user/' , {
            
  //               subscription_user:cookies.get('uuid'),
  //               gym : cookies.get('gym_id'),
  //               package_purchased:data.package_name,
  //               package_class_passes:data.class_count,
                
  //           });
  //           if (res.status === 200) {
  //               debugger
  //               console.log(res.status);
  //               console.log(cookies.get('uuid'));
  //               console.log(res.data);  
  //               window.location='/dashboard';
  //           }

  //           if (res.status === 404) {
  //             debugger
  //             console.log(res);
  //             alert(res.status);
  //         }
  //           debugger
  //           // Don't forget to return something
  //           return res.data
  //       }
  //       catch (err) {
  //           console.error('Signup Failed , Please try again.');
  //           window.location='/plans';
  //           alert(err);
  //       }
  //   }

    
  // }

  // function package_price(data){
  //   debugger
  //   $('#x').html='';
  //   document.getElementById("x").innerHTML='';
  //   $('#x').append("<h2>Amount: "+data.package_price+"</h2>")
  //   cookies.set('data',data,{path:'/'})
  // }

  return (

    <div className="PlansCard">
      <h1>{package_name}</h1>
      <p className="PlansCardClass">{class_count}</p>
      <small>{package_duration}</small>
      <p className="price">
        {package_price} <span>KWD</span>
      </p>
      <button className={"buy-button "+cookies.get('theme')}>Buy</button>
    </div>
  
  
  );
  

  
}

export default PlansCard;


{/* <PlansCard
              package_name="DROP-IN"
              class_count="1 Class Pass
  "
              package_duration="Valid for 2 weeks"
              price="12"
            />
            <PlansCard
              package_name="STANDARD"
              class_count="4 Class Pass
  "
              package_duration="Valid for 4 weeks"
              package_price="45"
            />
            <PlansCard
              package_name="SILVER"
              class_count="8 Class Pass
  "
              package_duration="Valid for 2 weeks"
              package_price="85"
            />
            <PlansCard
              package_name="PREMIUM"
              class_count="12 Class Pass
  "
              package_duration="Valid for 2 weeks"
              package_price="120"
            />
          </div>
        ) : (
          <div className="membership">
            <PlansCard
              package_name="1 Month"
              class_count="Unlimited
  "
              package_duration="Open Gym Access"
              package_price="50"
            />
            <PlansCard
              package_name="1 Month"
              class_count="Unlimited
  "
              package_duration="Open Gym Access"
              package_price="50"
            />
            <PlansCard
              package_name="1 Month"
              class_count="Unlimited
  "
              package_duration="Open Gym Access"
              package_price="50"
            /> */}
