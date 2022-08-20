export default function Product({ product }) {
  // Extract information from prop
  const { slug, title, price, image } = product.attributes;
  const imgUrl = image.data.attributes.formats.small.url;
  return (
    <div>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </div>
  );
}
