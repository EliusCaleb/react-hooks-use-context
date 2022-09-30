// src/context/user.js
import React,{useState} from "react";
import user from "../data";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
   // testing by changing value 
   //const currentUser = {
   // name: "Duane",
   // interests: ["Coding", "Biking", "Words ending in 'ing'"],
  //};
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


export { UserContext, UserProvider };