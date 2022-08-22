import styled from "styled-components";

export const ProductFlex = styled.div`
  /* testing */
  max-height: 380px;
  /* ... */
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  img {
    /* width: 100%; */
    /* height: 100%; */
    /* testing */
    width: 80%;
    height: 80%;
    /* ... */
    object-fit: contain;
  }
  h2,
  h3 {
    padding: 0.5rem 0rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1 1 20rem;
  /* centering images */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  cursor: pointer;
`;
