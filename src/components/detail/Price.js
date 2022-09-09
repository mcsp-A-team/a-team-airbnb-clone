import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { Counter } from "./Counter";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Rate from "./Rate";
import HouseDetailReview from "./HouseDetailReview";
import PricePerNight from "./PricePerNight";

export const Price = ({ range, setRange }) => {
  const [open, setOpen] = useState(false);

  const [showCleaningFee, setShowCleaningFee] = useState(false);
  const [showServiceFee, setShowServiceFee] = useState(false);

  const refOne = useRef(null);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    setStart(format(range[0].startDate, "MM/dd/yyy"));
    setEnd(format(range[0].endDate, "MM/dd/yyy"));
  }, [range]);
  ///////////////
  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };
  const difference = (
    Math.abs(range[0].startDate - range[0].endDate) /
    1000 /
    60 /
    60 /
    24
  ).toFixed(0);

  // Hide on outside click
  const hideOnClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setOpen(false);
    }
  };
  const discount = 60;
  const cleaningFee = 350;
  const serviceFee = 210;

  return (
    <div style={{ position: "relative", top: 90 }}>
      <div
        style={{
          backgroundColor: "white",
          height: "auto",
          width: 400,
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignContent: "center",
          position: "sticky",
          top: 0,
          border: "1 solid rgb(221, 221, 221)",
          borderRadius: 12,
          padding: 24,
          boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              paddingRight: 5,
              textDecoration: "line-through",
            }}
          >
            ${+PricePerNight + +discount}
          </span>
          <span
            style={{
              fontSize: 20,
              paddingRight: 40,
            }}
          >
            <strong> ${PricePerNight}</strong> night
          </span>
          <AiIcons.AiFillStar />
          <span>{Rate} · </span>
          <span style={{ textDecoration: "underline" }}>
            {HouseDetailReview} reviews
          </span>
        </div>
        <div>
          <input
            value={`${start} | ${end}`}
            readOnly
            className="input"
            onClick={() => setOpen((open) => !open)}
            style={{
              textAlign: "center",
              border: "1px solid",
              borderRadius: 5,
              width: 200,
              height: 50,
            }}
          ></input>
          <div ref={refOne}>
            {open && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
              />
            )}
          </div>
          <Counter />
        </div>
        {start !== end ? (
          <button
            style={{
              textAlign: "center",
              border: "1px solid",
              backgroundImage:
                "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
              borderRadius: 10,
              width: 300,
              height: 50,
              color: "white",
              fontSize: 18,
            }}
          >
            Reserve
          </button>
        ) : (
          <button
            style={{
              textAlign: "center",
              border: "1px solid",
              backgroundImage:
                "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
              borderRadius: 10,
              width: 300,
              height: 50,
              color: "white",
              fontSize: 18,
            }}
          >
            Check availabilty
          </button>
        )}
        {start !== end ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ paddingBottom: 20, paddingTop: 20 }}>
              You won't be charged yet
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                }}
              >
                <span style={{ textDecoration: "underline" }}>
                  ${PricePerNight} x {difference} nights
                </span>
                <span>${PricePerNight * difference}</span>
              </div>
              {showCleaningFee ? (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    height: "auto",
                    width: 400,
                    display: "flex",
                    alignContent: "center",
                    border: "1 solid rgb(221, 221, 221)",
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: "rgb(0 0 0 / 28%) 0px 8px 28px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    left: -290,
                    top: 225,
                  }}
                >
                  <button onClick={() => setShowCleaningFee(!showCleaningFee)}>
                    <IoIcons.IoIosClose size={30} />
                  </button>
                  One-time fee charged by host to cover the cost of cleaning
                  their space.
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                }}
              >
                <span
                  onClick={() => setShowCleaningFee(!showCleaningFee)}
                  style={{ textDecoration: "underline" }}
                >
                  Cleaning fee
                </span>
                <span>${cleaningFee}</span>
              </div>
              {showServiceFee ? (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    height: "auto",
                    width: 400,
                    display: "flex",
                    alignContent: "center",
                    border: "1 solid rgb(221, 221, 221)",
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: "rgb(0 0 0 / 28%) 0px 8px 28px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    left: -290,
                    top: 270,
                  }}
                >
                  <button onClick={() => setShowServiceFee(!showServiceFee)}>
                    <IoIcons.IoIosClose size={30} />
                  </button>
                  This helps us run our platform and offer services like 24/7
                  support on your trip.
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                  borderBottom: "0.5px solid rgb(205, 202, 202)",
                }}
              >
                <span
                  onClick={() => setShowServiceFee(!showServiceFee)}
                  style={{ textDecoration: "underline" }}
                >
                  Service fee
                </span>
                <span>${serviceFee}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                  paddingTop: 20,
                }}
              >
                <span>
                  <strong>Total before taxes</strong>
                </span>
                <span>
                  ${serviceFee + cleaningFee + PricePerNight * difference}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

//Need to figure out dates in between
