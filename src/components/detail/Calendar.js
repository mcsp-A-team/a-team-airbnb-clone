import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
// import { addDays } from "date-fns";

export const CalendarDisplay = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    setStart(format(range[0].startDate, "MM/dd/yyy"));
    setEnd(format(range[0].endDate, "MM/dd/yyy"));
    if (start === end) {
      SetEnterDate(false);
    } else {
      SetEnterDate(true);
    }
  }, [range]);

  const [enterDate, SetEnterDate] = useState(false);

  

  return (
    <div>
      <div
        style={{
          // borderTop: " .5px solid #cdcaca",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignContent: "center",
          justifContent: "space-eve",
          // width: 620,
          height: 730,
          paddingTop: 20,
          padding: 80,
        }}
      >
        {enterDate ? (
          <>
            <h1
              style={{
                display: "flex",
                fontSize: 25,
              }}
            >
              Select checkout date
            </h1>
            <span
              style={{
                display: "flex",
              }}
            >
              Add your travel date for exact pricing
            </span>
          </>
        ) : (
          <>
            <h1
              style={{
                display: "flex",
                fontSize: 25,
              }}
            >
              Select checkout date
            </h1>
            <span
              style={{
                display: "flex",
              }}
            >
              {start} - {end}
            </span>
          </>
        )}
        <DateRange
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
        />
        <button
          onClick={() => {
            setRange([
              {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
              },
            ]);
            setStart("");
            setEnd("");
          }}
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};
