import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
import HomePreview from "./HomePreview";
import { v4 } from 'uuid'
// import { useNavigate } from "react-router-dom";

export default function Home({ updateWishlist, wishlist }) {
  const { urlArr } = useContext(NavContext);

  const [currentHomes, setCurrentHomes] = useState([]);


  useEffect(() => {
    axios.get(`${API_ENDPOINT}/homes`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        setCurrentHomes((prevCurrentHomes) => [
          ...prevCurrentHomes,
          res.data[i],
        ]);
      }
    });
  }, []);

  const currentHomesWithUrl = urlArr.map((item, index) => {
    return { ...currentHomes[index], url: item };
  });

  // console.log(currentHomesWithUrl);

  //Hung: pass id props to HomePreview
  return (
    <div className="flex flex-wrap justify-evenly items-center mx-12">
      {currentHomesWithUrl.map((currentHomes, i) => {
        return (
          <div
            key={v4()}
            onClick={() => {
              window.open(`/housedetail/${currentHomes.id}`);
            }}
          >
            <HomePreview
              city={currentHomes.city}
              state={currentHomes.state}
              picture={currentHomes.url}
              country={currentHomes.country}
              id={currentHomes.id}
              updateWishlist={updateWishlist}
              wishlist={wishlist}
            />
          </div>
        );
      })}
    </div>
  );
}
