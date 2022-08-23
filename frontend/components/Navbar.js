import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Nav, NavItems } from "../styles/Navbar";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

// AnimatePresence enables animation for components that are tree removed.
// When adding/removing more a child they must have given a unique key prop.
// Now `motion` components that have an `exit` will animate out when removed.
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  return (
    <Nav>
      <Link href={"/"}>Superdry+</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQty > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { type: "spring", duration: 0.3 },
              }}
            >
              {totalQty}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </Nav>
  );
}
