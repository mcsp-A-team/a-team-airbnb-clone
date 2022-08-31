import React from "react";
import NavExplorer from "./NavExplorer";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <SearchBar />
        <NavExplorer />
      </div>
    </>
  );
}
