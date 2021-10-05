import api from "../../api/api";
import { createContext, useEffect, useState } from "react";

export const DrinksContext = createContext([]);

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const getApi = () => {
    api.get().then((response) => setDrinks(response.data))
    .catch((error)=>console.log(error))
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <DrinksContext.Provider value={{ drinks, setDrinks }}>
      {children}
    </DrinksContext.Provider>
  );
};
