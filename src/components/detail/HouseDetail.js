import React from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import "./detail.css";
import { Review } from "./Reviews";
import { Calendar } from "./Calendar";

function houseDetail() {
  return (
    <div className="house-detail">
      <div> Navbar </div>
      <hr></hr>
      <HouseDetailName />
      <HouseDetailSub />
      <Calendar />
      <Review />
    </div>
  );
}

export default houseDetail;
