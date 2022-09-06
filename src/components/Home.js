import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import axios from "axios";
import HomePreview from "./HomePreview";

export default function Home() {
  const { urlArr } = useContext(NavContext);

  const [currentHomes, setCurrentHomes] = useState([]);

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

  // console.log(currentHomesWithUrl);

  //Hung: pass id props to HomePreview
  return (
    <div className="flex flex-wrap justify-evenly items-center mx-12">
      {currentHomesWithUrl.map((currentHomes) => (
        <HomePreview
          key={currentHomes.id}
          id={currentHomes.id}
          city={currentHomes.city}
          state={currentHomes.state}
          picture={currentHomes.url}
          country={currentHomes.country}
        />
      ))}
    </div>
  );
}
