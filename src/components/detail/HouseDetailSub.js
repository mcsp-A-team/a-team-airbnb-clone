import HouseDetailReview from "./HouseDetailReview";
import Rate from "./Rate";

const HouseDetailSub = ({ }) => {
  return (
    <div className="house-detail-sub">
      <div className="house-detail-rating">
        <span>★ </span>
        <span>{Rate} ·</span>
        <span className="house-detail-review-button">
          <button type="button"> {HouseDetailReview} reviews</button>
          <span>· </span>
          <span className="house-detail-medal">
            <span>♟ </span>
          </span>
          <span className="house-detail-medal-title">Superhost </span>
          <span>· </span>
          <button className="house-detail-address-button">
            <span> Killeen, Texas, United States</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default HouseDetailSub;