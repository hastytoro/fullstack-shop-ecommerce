import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartPopup,
  Empty,
  Card,
  Info,
  Quantity,
} from "../styles/Cart";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, decreaseQty, onAdd, onRemove } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartPopup onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <Empty>
            <h2>Your shopping cart is empty.</h2>
            <FiShoppingCart />
          </Empty>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <Info>
                  <h5>{item.title}</h5>
                  <h5>{item.price}</h5>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item, 1)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </Info>
              </Card>
            );
          })}
      </CartPopup>
    </CartWrapper>
  );
}
