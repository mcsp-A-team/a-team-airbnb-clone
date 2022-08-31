import React from "react";
import iconsList from "./ExplorerIcons";
import FilterButton from "./FilterButton";

export default function NavExplorer() {
  return (
    <div className="explorer-bar bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="explorer-holder ">
        <div className="holder-icons flex flex-row gap-8">
          {iconsList.map((icon) => (
              <button
                  key={icon.title}
              aria-hidden="false"
              className="explorer-icon-btn"
              role="radio"
              aria-checked="false"
              type="button"
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
          <FilterButton />
        </div>
      </div>
    </div>
  );
}
