const HouseDetailImages = ({ house }) => {
  return (
    <div className="house-detail-image">
      <div className="house-detail-image-left">
        <img src="https://a0.muscache.com/im/pictures/b4f8e3d5-91e7-4f9c-ba02-a8d46872941d.jpg?im_w=1200" alt={house} />
      </div>
      <div className="house-detail-image-right">
        <img src="https://a0.muscache.com/im/pictures/822436b1-0982-4bf8-8a0d-30d502d22562.jpg?im_w=1200" alt={house} />
        <img src="https://a0.muscache.com/im/pictures/3264b76b-5a00-4e00-a2ba-7e94f69cfd6d.jpg?im_w=1200" alt={house} />
        <img src="https://a0.muscache.com/im/pictures/300243c9-91c6-41fe-9a84-8fa065919148.jpg?im_w=1200" alt={house} />
        <img src="https://a0.muscache.com/im/pictures/d5d1e207-7711-447d-8695-f2d2613e832d.jpg?im_w=1200" alt={house} />
      </div>
    </div>
  );
};

export default HouseDetailImages;
