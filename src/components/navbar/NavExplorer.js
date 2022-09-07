import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconsList from "./ExplorerIcons";
import FilterButton from "./FilterButton";
import { NavContext } from '../navbar/NavContext'

export default function NavExplorer() {
  const navigate = useNavigate();
  const { getFilterHome, urlArr } = useContext(NavContext);
  const handleClick = (title) => {
    navigate(`/${title}`);
    getFilterHome(title);
  };
  return (
    <div className="explorer-bar bg-white w-full flex relative justify-between items-center mx-auto px-20 h-20 max-w-full">
      <div className="explorer-holder  overflow-hidden overflow-auto  max-w-full ">
        <div className="holder-icons flex flex-row gap-8 ">
          {iconsList.map((icon) => (
            <button
              key={icon.title}
              aria-hidden="false"
              className="explorer-icon-btn"
              role="radio"
              aria-checked="false"
              type="button"
              onClick={() => handleClick(icon.title)}
            >
              <div className="explorer-icon">
                <span className="grid gap-1">
                  <div className="text-center">
                    <img
                      className="explorer-img"
                      src={icon.src}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="explorer-text">
                    <span className="">{icon.title}</span>
                  </div>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div>
        <FilterButton />
      </div>
    </div>
  );
}
