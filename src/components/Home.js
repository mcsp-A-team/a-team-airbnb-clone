import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import axios from "axios";
import HomePreview from "./HomePreview";
// import ScrollButton from "./detail/scrolltop/ScrollButton";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  const { urlArr } = useContext(NavContext);

  const [currentHomes, setCurrentHomes] = useState([]);

  useEffect(() => {
    axios.get("/homes").then((res) => {
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
            key={currentHomes.id}
            onClick={() => {
              window.open(`/housedetail/${currentHomes.id}`);
            }}
          >
            <HomePreview
              city={currentHomes.city}
              state={currentHomes.state}
              picture={currentHomes.url}
              country={currentHomes.country}
            />
            {/* ADD SCROLLBUTTON IF YOU NEED */}
            {/* <ScrollButton /> */}
          </div>
        );
      })}
    </div>
  );
}
