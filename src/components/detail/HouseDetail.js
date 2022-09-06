import React from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import HouseDetailImages from "./HouseDetailImages";
import HouseDetailDescription from "./HouseDetailDescription";
// import HouseDetailMap from "./HouseDetailMap";
import "./detail.css";
import { useParams } from "react-router-dom";
// import axios from "axios";

import { Review } from "./Reviews";
// import { CalendarDisplay } from "./Calendar";
import { Price } from "./Price";

import { useContext } from "react";
import { NavContext } from '../navbar/NavContext';


function HouseDetail() {
  // const { currentHomesData } = useContext(NavContext);
  // console.log(id)
//get the id from the url

  let  {id}  = useParams();
  // console.log(id);
  // useEffect(() => {
  //   axios.get(`http://localhost:3005/housedetail/${id}`).then((response) => {
  //     console.log("House data:", response.data);
  //     setPostObject(response.data);
  //   });
  // }, [id]);

  //get data from local storage


// const data = localStorage.getItem("currentHomesDataID");
  

  return (
    <div className="house-detail">
      <div>{id}</div>
      {/* <SearchBar /> */}
      <HouseDetailName />
      <HouseDetailSub />
      <HouseDetailImages />
      <div className="house-detail-body">
        <HouseDetailDescription />
        <Price />
      </div>
      {/* <CalendarDisplay /> */}
      <Review />
      {/* <HouseDetailMap /> */}
    </div>
  );
}

export default HouseDetail;
