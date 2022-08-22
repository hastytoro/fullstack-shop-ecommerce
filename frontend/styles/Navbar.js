import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
  span {
    position: absolute;
    top: -20%;
    right: -10%;
    background: var(--special);
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--special);
    border-radius: 50%;
    font-size: 0.7rem;
    padding: 0.5rem;
    pointer-events: none;
  }
`;
