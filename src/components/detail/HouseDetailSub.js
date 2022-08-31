const HouseDetailSub = ({ house }) => {
  return (
    <div className="house-detail-sub">
      <div className="house-detail-rating">
        <span>★ </span>
        <span>4.84 ·</span>
        <span className="house-detail-review-button">
          <button type="button">{house} 31 reviews</button>
          <span>· </span>
          <span className="house-detail-medal">
            <span>♟ </span>
          </span>
          <span className="house-detail-medal-title">Superhost </span>
          <span>· </span>
          <button className="house-detail-address-button">
            <span>{house} Killeen, Texas, United States</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default HouseDetailSub;

{/* <span class="_9xiloll" aria-hidden="false">Jonestown, Texas, United States</span> */}