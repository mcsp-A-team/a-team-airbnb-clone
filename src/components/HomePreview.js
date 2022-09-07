import React from "react";
import { useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";

export default function HomePreview({ city, state, picture, country }) {
  let miles = (Math.random() * 100).toFixed(0);
  let price = (Math.random() * 1000).toFixed(0);
  let rating = (Math.random() * 5).toFixed(2);

  return (
    <div className="group mx-1 my-4 flex flex-col items-start w-72">
      {/* <a href='/housedetail' target="-_tab" ><img className="w-70 rounded-lg home-img" src={picture} alt="img"/></a> */}
      <img className="w-70 rounded-lg home-img" src={picture} alt="img" />
      <div className="flex justify-between items-center w-full mt-2">
        <p className="font-semibold text-sm truncate">
          {city}, {state}, {country},
        </p>
        <p>&#9733;{rating} </p>
      </div>
      <p className="text-gray-500">{miles} miles</p>
      <p className="text-gray-500">Oct 3-8</p>
      <span className="flex">
        <p className="font-semibold">${price}&nbsp;</p>
        <p>night</p>
      </span>
      <span className="flex justify-between relative top-44 -z-10  w-full px-2 group-hover:z-10">
        <button className=" bg-white/75 rounded-full w-6 hover:scale-110 hover:bg-white/100 ">
          {"<"}
        </button>
        <button className=" bg-white/75 rounded-full w-6 hover:scale-110 hover:bg-white/100">
          {">"}
        </button>
      </span>
    </div>
  );
}
