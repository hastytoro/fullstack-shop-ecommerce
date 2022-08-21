import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Nav, NavItems } from "../styles/Navbar";

export default function Navbar() {
  return (
    <Nav>
      <Link href={"/"}>Superdry+</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </Nav>
  );
}
