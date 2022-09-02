import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import axios from "axios";
import HomePreview from "./HomePreview";

export default function Home() {
  const { urlArr } = useContext(NavContext);
  // console.log('home', urlArr);

  const [currentHomes, setCurrentHomes] = useState([]);
  // const [randomPicture, setRandomPicture] = useState();

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

  //unnecessary code
  // useEffect(() => {
  //   axios.get('<img src="https://random.imagecdn.app/500/150">').then(res => {
  //     console.log(res)
  //     setRandomPicture(res.data)
  //   })
  // }, [])
  // console.log(currentHomes)

  const currentHomesWithUrl = urlArr.map((item, index) => {
    return { ...currentHomes[index], url: item };
  });
  // console.log(currentHomesWithUrl);

  return (
    <div className="dash-board flex flex-wrap justify-evenly items-center pr-20">
      {currentHomesWithUrl.map((currentHomes) => (
        <HomePreview
          city={currentHomes.city}
          state={currentHomes.state}
          picture={currentHomes.url}
          country={currentHomes.country}
        />
      ))}
    </div>
  );
}
