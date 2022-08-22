import { ProductFlex, ImageWrapper } from "../styles/Product";
import Link from "next/link";

export default function Product({ product }) {
  // Extract information from prop
  const { slug, title, price, image } = product.attributes;
  const imgUrl = image.data.attributes.formats.small.url;
  return (
    <ProductFlex>
      <Link href={`/product/${slug}`}>
        <ImageWrapper>
          <img src={imgUrl} alt="" />
        </ImageWrapper>
      </Link>
      <h3>{title}</h3>
      <h3>{price}</h3>
    </ProductFlex>
  );
}
