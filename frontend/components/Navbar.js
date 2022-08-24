import Link from "next/link";

import { FiShoppingBag } from "react-icons/fi";
import { Nav, NavItems } from "../styles/Navbar";

import Cart from "./Cart";
import User from "./User";

// The useUser hook gets you the UserProfile object from the server-side session
// by requesting it from the HandleProfile API Route handler.
// https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
import { useUser } from "@auth0/nextjs-auth0";

import { useStateContext } from "../lib/context";

// AnimatePresence enables animation for components that are tree removed.
// When adding/removing more a child they must have given a unique key prop.
// Now `motion` components that have an `exit` will animate out when removed.
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const { user, error, isLoading } = useUser();
  return (
    <Nav>
      <Link href={"/"}>Superdry+</Link>
      <NavItems>
        <User />
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
