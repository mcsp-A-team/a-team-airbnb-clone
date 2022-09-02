import React from "react";
import "./showmore.css";

function Showmore({ closeShowMore }) {
  return (
    <div className="showmore-modal">
      <div className="showmore-modal-container">
        {/* <button
          //   href="http://localhost:3000/housedetail/"
          class="close-button"
          onClick={() => closeShowMore(false)}
        >
          {" "}
          Less...
        </button> */}
        <div className="title">
          <h1> About this space </h1>
          <p>
            You can rest assured we've put in place extensive cleaning and
            disinfecting procedures including new policies with increased focus
            on sanitizing all commonly touched surfaces before and after every
            stay. Look no more. You've found the perfect rental! Come stay with
            us and experience firsthand why our guests rave about our properties
            and love our customer service.
          </p>
          <p>
            Step away from the hustle and bustle, and experience the rugged,
            natural beauty of the surrounding hill country and lake.
          </p>
        </div>
        <div className="head">
          <h3>The space</h3>
          <p>
            With a pool at your back door and stunning lake views inside and
            out, this well-appointed waterfront home has practically everything
            you need for a relaxing lake getaway and a refreshing
            change-of-scenery, including:
          </p>
          <p>📺 Living Area 📺</p>
          <p>‣ Two large couches</p>
          <p>🍽️ Dining Area 🍽️</p>
          <p>‣ Table for fourteen</p>
          <p>☕ Kitchen ☕</p>
          <p>‣ Breakfast table for six and four bar stools</p>
          <p>☀️ Sunroom ☀️</p>
          <p>‣ More gorgeous lake views</p>
          <p>🛌 Master Bedroom Downstairs 🛌</p>
          <p>‣ King bed with private balcony area with lake views inside and out</p>
          <p>🛌 Guest Bedroom 2 Downstairs And 3 Upstairs 🛌</p>
          <p>‣ Queen bed with luxurious linens</p>
        </div>
        <div className="body">
          <h3>Guest access</h3>
          <p>
            This listing includes the entire house. You'll have access to the
            entire property and garage with these exceptions: One small pantry,
            a linen closet, one of the two master bedroom closets, and a garage
            closet are locked; the covered dock/boat lift is for owner access
            only.
          </p>
        </div>
        <div className="footer">
          <h3>Other things to note</h3>
          <p>
            Please remember to treat the space with respect. If any problems
            arise, we will do our best to take action ASAP but there is no one
            living on site 24/7.
          </p>
        </div>
        <button
          //   href="http://localhost:3000/housedetail/"
          class="close-button"
          onClick={() => closeShowMore(false)}
        >
          {" "}
          Less...
        </button>
      </div>
    </div>
  );
}

export default Showmore;
