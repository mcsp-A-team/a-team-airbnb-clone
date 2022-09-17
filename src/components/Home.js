import React, { useEffect, useState, useContext } from "react";
import { NavContext } from "../components/navbar/NavContext";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import HomePreview from "./HomePreview";
// import ScrollButton from "./detail/scrolltop/ScrollButton";
import { v4 } from "uuid";
// import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function Home({ updateWishlist, wishlist }) {
  const { urlArr } = useContext(NavContext);

  const [currentHomes, setCurrentHomes] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/homes`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        setCurrentHomes((prevCurrentHomes) => [
          ...prevCurrentHomes,
          res.data[i],
        ]);
      }
    });
  }, []);

  const currentHomesWithUrl = urlArr.map((item, index) => {
    return { ...currentHomes[index], url: item };
  });

  const showItems = (posts) => {
    var items = [];
    for (var i = 0; i < records; i++) {
      items.push(
        <div
          key={v4()}
          onClick={() => {
            window.open(`/housedetail/${currentHomesWithUrl[i].id}`);
          }}
        >
          <HomePreview
            city={currentHomesWithUrl[i].city}
            state={currentHomesWithUrl[i].state}
            picture={currentHomesWithUrl[i].url}
            country={currentHomesWithUrl[i].country}
            id={currentHomesWithUrl[i].id}
            updateWishlist={updateWishlist}
            wishlist={wishlist}
          />
          {/* ADD SCROLLBUTTON IF YOU NEED */}
          {/* <ScrollButton /> */}
        </div>
      );
    }
    return items;
  };

  const itemsPerPage = 10;
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(itemsPerPage);
  const loadMore = () => {
    if (records === currentHomesWithUrl.length) {
      setHasMore(false);
    } else {
      //when scroll at bottom, add 10 more items.
      window.onscroll = function () {
        if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight
        ) {
          setRecords(records + itemsPerPage);
          //move scroll up a little bit
          window.scrollTo(0, window.pageYOffset - 100);
        }
      };
    }
  };

  //Hung: pass id props to HomePreview
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<h4 className="loader">Loading...</h4>}
      useWindow={false}
      className="main-content flex flex-wrap justify-evenly items-center mx-12"
    >
      {/* <div className="flex flex-wrap justify-evenly items-center mx-12"> */}
      {showItems(currentHomesWithUrl)}
      {/* </div> */}
    </InfiniteScroll>
  );
}
