import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import axios from "axios";
import HomePreview from "./HomePreview";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  const { urlArr } = useContext(NavContext);

  const [currentHomes, setCurrentHomes] = useState([]);
  // let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3004/homes").then((res) => {
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

  // return (
  //   <div className='flex flex-wrap justify-evenly items-center mx-12'>
  //     {currentHomesWithUrl.map((currentHomes, i) => (
  // <HomePreview
  //   city={currentHomes.city}
  //   state={currentHomes.state}
  //   picture={currentHomes.url}
  //   country={currentHomes.country}
  // />
  //     ))}
  //   </div>
  // );
  return (
    <div className="flex flex-wrap justify-evenly items-center mx-12">
      {currentHomesWithUrl.map((currentHomes, i) => {
        return (
          <div
            key={i++}
            onClick={() => {
              window.open(`/housedetail/${i}`);
            }}
          >
            <HomePreview
              city={currentHomes.city}
              state={currentHomes.state}
              picture={currentHomes.url}
              country={currentHomes.country}
            />
          </div>
        );
      })}
    </div>
  );
}
