import styled from "styled-components";
import { motion } from "framer-motion";

export const CartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* testing */
  backdrop-filter: blur(1px);
  // ...
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartPopup = styled(motion.div)`
  filter: drop-shadow(5px 5px 20px #494949);
  position: relative;
  background: var(--background);
  width: 30%;
  padding: 2rem 1rem;
  /* testing */
  /* padding: 2rem 0rem; */
  // ...
  overflow-y: scroll;
`;

export const Card = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  /* testing */
  /* border-radius: 0rem; */
  // ...
  overflow: hidden;
  background: white;
  padding: 2rem;
  /* padding: 1rem; */
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
`;

export const Info = styled(motion.div)`
  width: 60%;
  p {
    /* testing */
    color: var(--secondary);
    /* font-size: 0.8rem; */
  }
`;

export const Quantity = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    padding: 0rem 0.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: var(--lightgray);
  }
`;

export const Empty = styled(motion.div)`
  /* position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%); */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.5rem;
    padding: 2rem;
  }
  svg {
    font-size: 10rem;
    /* color: var(--secondary); */
  }
`;

export const Checkout = styled(motion.div)`
  button {
    border: none;
    border-radius: 5px;
    width: 100%;
    background: var(--primary);
    color: white;
    font-weight: 500;
    padding: 1rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
  }
`;
