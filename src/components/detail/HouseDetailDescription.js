import React, { useState } from "react";
import Showmore from "./Showmore";
import Learnmore from "./Learnmore";
import { CalendarDisplay } from "./Calendar";

// import "./modal.css";
// import Modal from "./modal/Modal";

const HouseDetailDescription = ({ house, range, setRange }) => {
  const [openShowmore, setOpenShowmore] = useState(false);
  const [openLearnmore, setOpenLearnmore] = useState(false);

  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="house-detail-des">
      <div className="house-detail-des-container">
        <div className="house-detail-des-left">
          <h3>Entire home hosted by {house} ANNA </h3>
          <p className="house-detail-des-content">
            15 guests· 5 bedrooms· 9 beds· 3.5 baths {house}
          </p>
        </div>
        <div className="house-detail-des-avatar">
          <img
            className="avatar"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            alt={house}
          />
        </div>
      </div>
      <div className="house-detail-des-divider"></div>
      <div className="house-detail-des-note">
        <img
          src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
          alt={house}
        />
        <div>
          <p>Dedicated workspace</p>
          <p>A common area with wifi that’s well-suited for working.</p>
        </div>
      </div>

      <div className="house-detail-des-note">
        <img
          src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg"
          alt={house}
        />
        <div>
          <p>Self check-in</p>
          <p>Check yourself in with the keypad.</p>
        </div>
      </div>

      <div className="house-detail-des-note">
        <img
          src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
          alt={house}
        />
        <div>
          <p>Great check-in experience</p>
          <p>
            92% of guests recently gave a 5-star rating to the check-in process.
          </p>
        </div>
      </div>
      <div className="house-detail-des-divider"></div>
      <div className="house-detail-des-cover">
        <img
          src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
          alt={house}
        />
        <div>
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in. If
            you can’t check into your home and the Host cannot resolve the
            issue, we’ll find you a similar or better home for the length of
            your original stay, or we’ll refund you.
          </p>
          <button
            onClick={() => {
              setOpenLearnmore(true);
            }}
          >
            Learn more
          </button>
          {openLearnmore && <Learnmore closeLearnMore={setOpenLearnmore} />}
        </div>
        <div className="house-detail-des-divider"></div>
        <div className="house-detail-des-intro">
          <p>
            Retreat to one of Arkansas' premiere destination homes designed by
            famous architect E. Fay Jones. A serene and romantic home, the
            Shaheen-Goodfellow Cottage, known as Stoneflower is nestled in the
            gently rolling foothills of the Arkansas Ozarks and surrounded by
            pristine Greer's Ferry Lake and the beautiful Eden Isle resort. As
            you walk into ...
          </p>
          <button
            onClick={() => {
              setOpenShowmore(true);
            }}
          >
            Show more
          </button>
          {openShowmore && <Showmore closeShowMore={setOpenShowmore} />}
        </div>
        <div className="house-detail-des-divider"></div>
        <CalendarDisplay range={range} setRange={setRange} />
      </div>
    </div>
  );
};

export default HouseDetailDescription;
