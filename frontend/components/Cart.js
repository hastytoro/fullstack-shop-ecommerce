import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartPopup,
  Empty,
  Card,
  Info,
  Quantity,
  Checkout,
} from "../styles/Cart";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

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
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card
                key={item.slug}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.35 }}
              >
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
