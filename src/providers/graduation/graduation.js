import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [cartGraduation, setCartGraduation] = useState([]);

  const addToCartGraduation = (item) => {
    const inCart = cartGraduation.find((itemCart)=>itemCart.name === item.name )

    if(inCart === undefined){
      setCartGraduation([...cartGraduation, item]);
      toast.success("Item adicionado as formaturas")
    }else{
      toast.error("Item já em formaturas")
    }
  };

  const removeFromCartGraduation = (item) => {
    const newCartGraduation = cartGraduation.filter(
      (itemOnCart) => itemOnCart.id !== item.id
    );
    setCartGraduation(newCartGraduation);
    toast.success("Item removido das formaturas")
  };
  return (
    <GraduationContext.Provider
      value={{ cartGraduation, addToCartGraduation, removeFromCartGraduation }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
export default GraduationProvider