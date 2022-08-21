import { ProductFlex, ImageWrapper } from "../styles/ProductWrapper";

export default function Product({ product }) {
  // Extract information from prop
  const { slug, title, price, image } = product.attributes;
  const imgUrl = image.data.attributes.formats.small.url;
  return (
    <ProductFlex>
      <ImageWrapper>
        <img src={imgUrl} alt="" />
      </ImageWrapper>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductFlex>
  );
}
