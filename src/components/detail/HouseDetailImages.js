import React, { useState, useEffect, useContext } from "react";
import { NavContext } from '../navbar/NavContext';

const HouseDetailImages = () => {
  const [housePictures, setHousePictures] = useState([]);
  const { urlArr } = useContext(NavContext);

  useEffect(() => {
      for (let i = 0; i < urlArr.length; i++) {
        setHousePictures((prevHousePictures) => [
          ...prevHousePictures,
          urlArr[i],
        ]);
      }
  }, []);

  let randomIndex = Math.floor(Math.random() * housePictures.length);
  return (
    <div className="flex space-x-2 w-full h-full">
      <div className="house-detail-image-left w-full h-24">
        <img
          src={housePictures[randomIndex]}
          alt="houseDetail"
        />
      </div>
      <div className="house-detail-image-right flex flex-wrap">
        <img className="h-24" src={housePictures[randomIndex + 1]} alt="houseDetail" />
        <img className="h-24" src={housePictures[randomIndex + 2]} alt="houseDetail" />
        <img className="h-24" src={housePictures[randomIndex + 3]} alt="houseDetail" />
        <img className="h-24" src={housePictures[randomIndex + 4]} alt="houseDetail" />
      </div>
    </div>
  );
};

export default HouseDetailImages;
