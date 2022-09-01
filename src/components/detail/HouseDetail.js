import React from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import "./detail.css";
import { Review } from "./Reviews";
import { CalendarDisplay } from "./Calendar";

function houseDetail() {
  return (
    <div className="house-detail">
      <div> Navbar </div>
      <hr></hr>
      <HouseDetailName />
      <HouseDetailSub />
      <CalendarDisplay />
      <Review />
    </div>
  );
}

export default houseDetail;
