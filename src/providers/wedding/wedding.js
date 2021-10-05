import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [cartWedding, setCartWedding] = useState([]);

  const addToCartWedding = (item) => {
    
    const inCart = cartWedding.find((itemCart)=>itemCart.name === item.name )

    if(inCart === undefined){
      setCartWedding([...cartWedding, item]);
      toast.success("Item adicionado aos casamentos")
    }else{
      toast.error("Item já em Casamentos")
    }

    
  };

  const removeFromCartWedding = (item) => {
    const newCartWedding = cartWedding.filter(
      (itemOnCart) => itemOnCart.name !== item.name
    );
    setCartWedding(newCartWedding);
    toast.success("Item removido dos casamentos")
  };
  return (
    <WeddingContext.Provider
      value={{ cartWedding, addToCartWedding, removeFromCartWedding }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
