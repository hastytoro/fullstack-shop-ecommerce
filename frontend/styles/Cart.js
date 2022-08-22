import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartPopup = styled.div`
  position: relative;
  background: #f1f1f1;
  width: 30%;
  padding: 2rem 5rem;
  overflow-y: scroll;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
`;

export const Info = styled.div`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
  h5 {
    /* testing */
    color: var(--secondary);
    font-size: 0.8rem;
  }
`;

export const Quantity = styled.div`
  margin-top: 1rem;
  span {
    font-size: 0.8rem;
  }
  button {
    border: none;
    background: transparent;
  }
`;

export const Empty = styled.div`
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
