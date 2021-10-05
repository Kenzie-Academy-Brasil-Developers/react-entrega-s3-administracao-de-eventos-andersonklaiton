import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [cartConfraternization, setCartConfraternization] = useState([]);

  const addToCartConfraternization = (item) => {

    const inCart = cartConfraternization.find((itemCart)=>itemCart.name === item.name )

    if(inCart === undefined){
      setCartConfraternization([...cartConfraternization, item]);
      toast.success("Item adicionado as confraternizações")
    }else{
      toast.error("Item já em confraternizações")
    }
  };

  const removeFromCartConfraternization = (item) => {
    const newCartConfraternization = cartConfraternization.filter(
      (itemOnCart) => itemOnCart.id !== item.id
    );
    setCartConfraternization(newCartConfraternization);
    toast.success("Item removido das confraternizações")
  };
  return (
    <ConfraternizationContext.Provider
      value={{
        cartConfraternization,
        addToCartConfraternization,
        removeFromCartConfraternization,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
export default ConfraternizationProvider