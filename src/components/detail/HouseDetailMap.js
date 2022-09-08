import React from "react";
import ScrollButton from "./scrolltop/ScrollButton";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function HouseDetailMap() {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <div className="house-detail-des-map">
        <h3>Where you’ll be</h3>
        <p>Killeen, Texas, United States</p>
        <div class="house-detail-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9080001.957585977!2d-100.08735533691657!3d38.36887916417855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1662574742836!5m2!1sen!2sus"
            width="700"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
}
