import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <MyContext.Provider value={{ user, setUser, products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};
