import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NavContext = createContext();

export default function NavContextProvider({ children }) {
  //**Inout search bar state */
  const [searchInput, setSearchInput] = useState('');
  const onChangeInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value)
  };
  
  //**Get lorem picture */
  const [loremPic, setLoremPic] = useState([]);
  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=3&limit=100").then((res) => {
      setLoremPic(res.data);
    });
  }, []);
  // console.log(loremPic);
  const urlArr = loremPic.map((item) => item.download_url);
  // console.log(urlArr);

    
  //**Get homes by country (search results) */
  const [searchResults, setSearchResults] = useState([]);
  const getHomesByCountry = async (input) => {
    try {
      const response = await axios.get(
        `/homes/country/${input}`
      )
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

   
    const navContextData = {
        searchInput,
      onChangeInput,
      getHomesByCountry,
      searchResults,
      urlArr
    }
    
    return (
      <NavContext.Provider value={navContextData}>
        {children}
      </NavContext.Provider>
    );
    }