import styled from "styled-components";

export const ProductFlex = styled.div`
  background: white;
  position: relative;
  /* max-height: 400px; */
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  img {
    width: 100%;
    height: 90%;
    object-fit: contain;
    cursor: pointer;
  }
  h2,
  h3 {
    padding: 0.5rem 0rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1 1 20rem;
  overflow: hidden;
`;
