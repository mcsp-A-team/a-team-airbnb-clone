import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { faker } from "@faker-js/faker";

export const Review = () => {
  const randomRate = (Math.random() * 5).toFixed(2);

  const [fakeReviews, SetFakeREviews] = useState([
    "Cleanliness",
    "Check-in",
    "Location",
    "Communication",
    "Accuracy",
    "Value",
  ]);
  return (
    <div>
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
          }}
        >
          {randomRate}
          <AiIcons.AiFillStar />
          <BsIcons.BsDot /> 6 Reviews
        </h1>
      </div>
      <div style={{ grid: "inherit" }}>
        <div class="pb-10 grid grid-cols-2 gap-.5 ">
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
                  marginRight: 60,
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

        <div className="writtenReviews" class="grid grid-cols-2 gap-.5">
          {fakeReviews.map((f) => {
            const randomPic = faker.image.people();
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
                  width: 350,
                  textAlign: "left",
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
                <p>{faker.lorem.paragraph()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
