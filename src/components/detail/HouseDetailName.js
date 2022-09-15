const HouseDetailName = ({ house }) => {
  return (
    <h1 className="house-detail-name">
      {house[0].streetaddress} at {house[0].city} | Luxury {house[0].home_type}{" "}
      | Pool
    </h1>
  );
};

export default HouseDetailName;
