import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Wishlist({ wishlist }) {
  let wishListArr = [];
  useEffect(() => {
    for (let i = 0; i < wishlist.length; i++) {
      axios.get(`/homes/${wishlist[i]}`).then((res) => {
        wishListArr.push(res.data[0]);
        // console.log(res.data);
      });
    }
    console.log("wishListArr", wishListArr);
  }, []);

  return (
    <div>
      <div>Wishlist</div>
      <div>
        Hello
        {wishListArr.map((i) => {
          return (
            <div
              key={i.id}
              style={{ display: "flex", width: 100, height: 100 }}
            >
              <span>{i.city}</span>
              <span>{i.country}</span>
              <span>{i.state}</span>
              <span>jello</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
