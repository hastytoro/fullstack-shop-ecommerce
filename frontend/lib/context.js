import React, { createContext, useContext, useState } from "react";

// * WHAT IS REACT CONTEXT?
// React context allows us to pass down and use (consume) data in whatever
// component we need in our React app without using props.
// React context helps us avoid the problem of props drilling.
// In other words, React context allows us to share data (state) across our
// components more easily. These types of data include:
// - Theme data (like dark or light mode)
// - User data (the currently authenticated user)
// - Location-specific data (like user language or locale)

// * There are four steps to using React context:
// 1. Create context API using the `createContext` method.
// 2. Take your created context and wrap with the `provider` around your tree.
// 3. Put any `value` you like on your context provider using the value prop.
// 4. Read that value within any component by using the context `consumer`.
// ? https://www.freecodecamp.org/news/react-context-for-beginners/

const context = createContext();

// Notice we pass in and then wrap over dynamically the `props.children`.
// We have wrapped over components from the main entrypoint being App.

export const StateContext = ({ children }) => {
  // Adding data for the global context state API:
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  // Function handlers:
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    if (qty === 1) return;
    setQty((prevQty) => prevQty - 1);
  };

  return (
    <context.Provider value={{ qty, increaseQty, decreaseQty }}>
      {children}
    </context.Provider>
  );
};

// CUSTOM HOOK:
export const useStateContext = () => useContext(context);
