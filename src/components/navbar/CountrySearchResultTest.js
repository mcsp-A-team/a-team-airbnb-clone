import React from 'react'
import { useContext } from "react";

//remember to change the path to the NavContext file
import { NavContext } from "./NavContext";


export default function CountryResult() {
  const { searchInput } = useContext(NavContext);

  //this is the string input from the search bar
  //console.log(searchInput);

  return (
      <h1>{searchInput}</h1>
  )
}
