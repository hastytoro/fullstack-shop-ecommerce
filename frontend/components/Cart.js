import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartPopup,
  Empty,
  Cards,
  Card,
  Info,
  Quantity,
  Checkout,
} from "../styles/Cart";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import { motion } from "framer-motion";
// Animation variants allow us to enable `staggerChildren` to parent container.
// The main reason we create them is staggering. For example our parent Cards
// component can stagger each child Card under it.
const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};
// Notice we don't need to setup `initial` and `animate` attributes in the child.
// As they are already defined in the parent variant it inherits from.
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();
  return (
    <CartWrapper
      onClick={() => setShowCart(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CartPopup
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }} // requires `AnimatePresence` in Navbar
        transition={{ type: "tween" }}
      >
        {cartItems.length < 1 && (
          <Empty
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
          >
            <h2>Your shopping cart is empty.</h2>
            <FiShoppingCart />
          </Empty>
        )}

        <motion.div variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <Info>
                    <h3>{item.title}</h3>
                    <p>{item.price}$</p>
                    <Quantity>
                      <span>Quantity</span>
                      <button>
                        <AiFillMinusCircle onClick={() => onRemove(item, 1)} />
                      </button>
                      <p>{item.quantity}</p>
                      <button>
                        <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                      </button>
                    </Quantity>
                  </Info>
                </Card>
              );
            })}
        </motion.div>
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal: {totalPrice}$</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartPopup>
    </CartWrapper>
  );
}
