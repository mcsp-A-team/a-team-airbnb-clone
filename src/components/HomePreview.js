import React from "react";

export default function HomePreview({ city, state, picture, country }) {
  let miles = (Math.random() * 100).toFixed(0);
  let price = (Math.random() * 100).toFixed(0);

  console.log(country);

  return (
    <div className="img-display m-2 flex flex-col items-start w-70 ">
      <a href="/houseDetail" target="_tab">
        <img className="w-70 rounded-lg home-img" src={picture} alt="img"/>
      </a>
      <p className="text-display font-semibold">
        {`${ city }, ${ state }, ${ country }`}
      </p>
      <p>{miles} miles</p>
      <p>Oct 3-8</p>
      <p className="font-semibold">${price} night</p>
    </div>
  );
}
