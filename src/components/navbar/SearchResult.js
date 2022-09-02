import React from "react";
import { useContext } from "react";
import HomePreview from "../HomePreview";

//remember to change the path to the NavContext file
import { NavContext } from "./NavContext";

export default function SearchResults() {
  const { searchResults, urlArr } = useContext(NavContext);

  // console.log(searchResults);
  // console.log(urlArr);
  //random integer from 0 - 99 to genenrate random picture
 
  const resultWithUrl = searchResults.map((item, index) => {
    return { ...item, url: urlArr[Math.floor(Math.random() * urlArr.length)] };
  });

  // console.log(resultWithUrl);

  return (
    <div className="flex flex-wrap justify-evenly items-center px-20">
      {resultWithUrl.map((currentHomes, index) => (
        <HomePreview
          key={index}
          country={currentHomes.country}
          city={currentHomes.city}
          state={currentHomes.state}
          picture={currentHomes.url}
        />
      ))}
    </div>
  );
}
