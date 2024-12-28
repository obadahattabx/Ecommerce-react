import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  useEffect(() => {
    if (localStorage.getItem("token")) setLogin(true);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, login, setLogin }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useLogin = () => {
  return useContext(CartContext);
};
