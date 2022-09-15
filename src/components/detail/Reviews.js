import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { faker } from "@faker-js/faker";
import HouseDetailReview from "./HouseDetailReview";
import Rate from "./Rate";

export const Review = () => {
  const [fakeReviews, SetFakeREviews] = useState([
    "Cleanliness",
    "Check-in",
    "Location",
    "Communication",
    "Accuracy",
    "Value",
  ]);
  return (
    <div
      style={{
        borderTop: " .5px solid #cdcaca",
        borderBottom: " .5px solid #cdcaca",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            paddingRight: 6,
            display: "flex",
            fontSize: 22,
            alignContent: "center",
            alignItems: "center",
            paddingTop: 35,
          }}
        >
          <AiIcons.AiFillStar />
          {Rate}
          <BsIcons.BsDot /> {HouseDetailReview} Reviews
        </h1>
      </div>
      <div style={{ grid: "inherit" }}>
        <div class="pb-10 grid grid-cols-2 gap-.5  ">
          {fakeReviews.map((f) => {
            const random = (Math.random() * 5).toFixed(1);
            return (
              <div
                key={f}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "stretch",
                  justifyContent: "space-between",
                  marginRight: 100,
                  marginTop: 10,
                }}
              >
                <span>{f}</span>
                <div>
                  <meter max="5" value={random}></meter>
                  {random}
                </div>
              </div>
            );
          })}
        </div>

        <div className="writtenReviews" class=" grid grid-cols-2 gap-.5">
          {fakeReviews.map((f) => {
            const randomPic = faker.image.people(100, 100, true);
            return (
              <div
                key={f + 1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  alignContent: "stretch",
                  " justifyContent": "space-evenly",
                  alignItems: "flex-start",
                  width: 400,
                  textAlign: "left",
                  paddingBottom: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={randomPic}
                    style={{ borderRadius: 25, width: 50 }}
                  ></img>{" "}
                  <div
                    style={{
                      paddingLeft: 10,
                    }}
                  >
                    <h1>{faker.name.firstName()}</h1>
                    <span>{faker.date.month({ context: true })} 2022</span>
                  </div>
                </div>
                <p>{faker.lorem.sentences(2, "\n")}</p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 10,
          }}
        >
          <button
            style={{
              border: "1px solid black",
              borderRadius: 10,
              width: 200,
              height: 50,
            }}
          >
            <strong>Show all {HouseDetailReview} reviews</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
