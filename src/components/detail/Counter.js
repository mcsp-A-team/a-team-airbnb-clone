import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [guest, setGuest] = useState(false);

  const [adultCounter, setAdultCounter] = useState(1);

  const handleAdultPlus = () => {
    setAdultCounter(adultCounter + 1);
  };

  const handleAdultMinus = () => {
    if (adultCounter !== 1) {
      setAdultCounter(adultCounter - 1);
    }
  };

  const [childrenCounter, setChildrenCounter] = useState(0);

  const handleChildPlus = () => {
    setChildrenCounter(childrenCounter + 1);
  };

  const handleChildMinus = () => {
    if (childrenCounter !== 0) {
      setChildrenCounter(childrenCounter - 1);
    }
  };

  const [infantCounter, setInfantCounter] = useState(0);

  const handleInfantPlus = () => {
    setInfantCounter(infantCounter + 1);
  };

  const handleInfantMinus = () => {
    if (infantCounter !== 0) {
      setInfantCounter(infantCounter - 1);
    }
  };

  const [petCounter, setPetCounter] = useState(0);

  const handlePetPlus = () => {
    setPetCounter(petCounter + 1);
  };

  const handlePetMinus = () => {
    if (petCounter !== 0) {
      setPetCounter(petCounter - 1);
    }
  };
  let numOfGuest = childrenCounter + infantCounter + adultCounter + petCounter;

  return (
    <div>
      <input
        value={`${numOfGuest} guest`}
        className="input"
        onClick={() => setGuest((guest) => !guest)}
        onChange={() => console.log(numOfGuest)}
        style={{
          textAlign: "center",
          border: "1px solid",
          borderRadius: 5,
          width: 200,
          height: 50,
        }}
      ></input>
      {guest && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "stretch",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: 410,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span>
                <strong>Adults</strong>
              </span>
              <span>Age 13 +</span>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handleAdultMinus}
              >
                -
              </button>
              <span
                style={{
                  padding: 10,
                }}
              >
                {adultCounter}
              </span>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handleAdultPlus}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "stretch",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: 410,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span>
                <strong>Children</strong>
              </span>
              <span>Ages 2-12</span>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handleChildMinus}
              >
                -
              </button>
              <span
                style={{
                  padding: 10,
                }}
              >
                {childrenCounter}
              </span>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handleChildPlus}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "stretch",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: 410,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span>
                <strong>Infants</strong>
              </span>
              <span>Under 2</span>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid gray",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                }}
                onClick={handleInfantMinus}
              >
                -
              </button>
              <span
                style={{
                  padding: 10,
                }}
              >
                {infantCounter}
              </span>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handleInfantPlus}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "stretch",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: 410,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span>
                <strong>Pets</strong>
              </span>
              <span
                style={{
                  fontSize: 10,
                  textDecorationLine: "underline",
                }}
              >
                Bringing a service animal?
              </span>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handlePetMinus}
              >
                -
              </button>
              <span
                style={{
                  padding: 10,
                }}
              >
                {petCounter}
              </span>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  height: 25,
                  width: 25,
                  border: "1px solid gray",
                }}
                onClick={handlePetPlus}
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
