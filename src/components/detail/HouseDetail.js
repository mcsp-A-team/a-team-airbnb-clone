import React from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import HouseDetailImages from "./HouseDetailImages";
import SearchBar from "../navbar/SearchBar";
import HouseDetailDescription from "./HouseDetailDescription";
import HouseDetailMap from "./HouseDetailMap";
import './detail.css';
// import { useParams } from "react-router-dom";
// import axios from "axios";


function houseDetail() {
  // let { id } = useParams();
  // useEffect(() => {
  //   axios.get(`http://localhost:3005/housedetail/${id}`).then((response) => {
  //     console.log("House data:", response.data);
  //     setPostObject(response.data);
  //   });
  // }, [id]);

  return (
    <div className="house-detail">
      <SearchBar />
      <HouseDetailName />
      <HouseDetailSub />
      <HouseDetailImages />
      <div className="house-detail-body">
        <HouseDetailDescription />
        {/* Price Form Here */}
      </div>
        <HouseDetailMap />
    </div>

  )
}

export default houseDetail;
