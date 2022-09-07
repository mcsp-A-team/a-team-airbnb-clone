import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import heart from "../assets/heart.svg";
import heartFull from "../assets/heart-full.png";

export default function Wishlist({ wishlist }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [p, setp] = useState([]);
  useEffect(() => {
    for (let i = 0; i < wishlist.length; i++) {
      axios.get(`/homes/${wishlist[i]}`).then((res) => {
        setp((p) => [...p, res.data[0]]);
        console.log(res.data);
      });
    }
  }, []);

  return (
    <div>
      <div>Wishlist</div>
      <div className="relative mx-1 my-4 flex flex-col items-start w-72">
        {p.map((i) => {
          const randomPic = faker.image.business(100, 100, true);
          const randomRating = (Math.random() * 5).toFixed(2);
          const miles = (Math.random() * 100).toFixed(0);
          const price = (Math.random() * 1000).toFixed(0);
          return (
            <div key={i.id}>
              <img
                className="w-70 rounded-lg home-img"
                src={randomPic}
                alt="img"
              />
              <div className="flex justify-between items-center w-full mt-2">
                <p className="font-semibold text-sm truncate">
                  {i.city}, {i.state}, {i.country},
                </p>
                <p>&#9733;{randomRating} </p>
              </div>
              <p className="text-gray-500">{miles} miles</p>
              <p className="text-gray-500">Oct 3-8</p>
              <span className="flex">
                <p className="font-semibold">${price}&nbsp;</p>
                <p>night</p>
              </span>
              <button>
                <img
                  className=" absolute top-4 right-4 w-6 h-6"
                  src={heartFull}
                  alt={""}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
