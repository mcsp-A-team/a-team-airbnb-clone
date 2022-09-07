import axios from 'axios'
import React, { useState, useEffect } from 'react';

const HouseDetailImages = ({ }) => {

  const [housePictures, setHousePictures] = useState([])
  

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=3&limit=100").then((res) => {
      console.log('pictures:', res.data[0].download_url)
      for (let i = 0; i < res.data.length; i++) {
        setHousePictures(prevHousePictures => [...prevHousePictures, res.data[i].download_url])
      }
    });
  }, []);

  

  let randomIndex = Math.floor(Math.random() * housePictures.length);
  return (
    <div className="flex space-x-2">
      <div className="house-detail-image-left">
        <img className='w-full h-full' src={housePictures[randomIndex]} />
      </div>
      <div className="house-detail-image-right">
        <img src={housePictures[randomIndex+1]}  />
        <img src={housePictures[randomIndex+2]}  />
        <img src={housePictures[randomIndex+3]}  />
        <img src={housePictures[randomIndex+4]}  />
      </div>
    </div>
  );
};

export default HouseDetailImages;

