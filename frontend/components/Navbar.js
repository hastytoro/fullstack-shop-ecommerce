import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Nav, NavItems } from "../styles/Navbar";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  console.log(totalQty);
  return (
    <Nav>
      <Link href={"/"}>Superdry+</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQty > 0 && <span>{totalQty}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </Nav>
  );
}
