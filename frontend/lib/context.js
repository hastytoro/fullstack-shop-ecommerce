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
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function handlers:
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    if (qty === 1) return;
    setQty((prevQty) => prevQty - 1);
  };
  const onAdd = (product, quantity) => {
    // Find if the item exists already in `cartItems` array:
    const exist = cartItems.find((item) => item.slug === product.slug);
    // Never mutate state directly instead always return spread a updated clone.
    // Again if true we spread existing properties and update only the quantity.
    // Otherwise just spread the current cart items array with the new product.
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      // If false it does not exist then so add the product to cart:
      // We spread existing items keeping state intact but add this new object:
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    <context.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
      }}
    >
      {children}
    </context.Provider>
  );
};

// CUSTOM HOOK:
export const useStateContext = () => useContext(context);
