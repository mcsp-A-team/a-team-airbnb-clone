import React from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import './detail.css';

function houseDetail() {
  return (
    <div className="house-detail">
    <div> Navbar </div>
    <hr></hr>
      <HouseDetailName />
      <HouseDetailSub />
    </div>

  )
}

export default houseDetail;
