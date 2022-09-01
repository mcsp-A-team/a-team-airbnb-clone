import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavContextProvider({ children }) {
    const [searchInput, setSearchInput] = useState('');
    
   const onChangeInput = (event) => setSearchInput(event.target.value);
   
    const navContextData = {
        searchInput,
        onChangeInput
    }
    
    return (
      <NavContext.Provider value={navContextData}>
        {children}
      </NavContext.Provider>
    );
    }