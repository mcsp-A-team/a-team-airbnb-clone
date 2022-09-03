import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { Counter } from "./Counter";
import * as AiIcons from "react-icons/ai";

export const Price = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  // const [guest, setGuest] = useState(false);

  const refOne = useRef(null);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  let days = "";
  // let numOfGuest = 1;

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

  // Hide on outside click
  const hideOnClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div style={{ position: "relative", top: 90 }}>
      <div
        style={{
          backgroundColor: "white",
          height: 400,
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
            $920
          </span>
          <span
            style={{
              fontSize: 20,
              paddingRight: 40,
            }}
          >
            <strong> $816</strong> night
          </span>
          <AiIcons.AiFillStar />
          <span>4.95 · </span>
          <span style={{ textDecoration: "underline" }}>159 reviews</span>
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
      </div>
    </div>
  );
};
