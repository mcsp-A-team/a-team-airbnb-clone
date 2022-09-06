import React, { useEffect, useState } from "react";
import HouseDetailName from "./HouseDetailName";
import HouseDetailSub from "./HouseDetailSub";
import HouseDetailImages from "./HouseDetailImages";
// import SearchBar from "../navbar/SearchBar";
import HouseDetailDescription from "./HouseDetailDescription";
import HouseDetailMap from "./HouseDetailMap";
import "./detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Review } from "./Reviews";
// import { CalendarDisplay } from "./Calendar";

function HouseDetail() {
  let { id } = useParams();
  const [houseObject, setHouseObject] = useState({});
  const [house, setHouse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/homes/${id}`).then((response) => {
      console.log("House ID:", response.data[0]);
      setHouseObject(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3001/homes`).then((response) => {
      console.log("House data:", response.data);
      setHouse(response.data);
      if (house) {
        setHouseObject(() => house);
      }
    });
  }, [])

  if (!house) return <></>;

  return (
    <div className="house-detail">
      {/* <SearchBar /> */}
      <HouseDetailName house={houseObject}/>
      <HouseDetailSub house={houseObject}/>
      <HouseDetailImages />
      <div className="house-detail-body">
        <HouseDetailDescription />
        {/* Price Form Here */}
      </div>
      <Review />
      <HouseDetailMap />
    </div>
  );
}

export default HouseDetail;
