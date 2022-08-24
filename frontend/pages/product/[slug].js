import { useRouter } from "next/router";

import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

import {
  DetailWrapper,
  DetailInfo,
  Quantity,
  Buy,
} from "../../styles/SlugDetail";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { useStateContext } from "../../lib/context";

import toast from "react-hot-toast";

export default function SlugDetail() {
  // Use "consume" context state:
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  // Fetch slug from the url with useRouter hook.
  const { query } = useRouter();
  // Fetch from `strapi` with `urql` and graphql query:
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no! {error.message}</p>;

  // Extract our data from the graphql backend query:
  const product = data.products.data[0].attributes;
  const { title, description, image } = product;
  const imgUrl = image.data.attributes.formats.medium.url;

  // Create a toast :)
  const notify = () => {
    toast.success(`${title} added!`, { duration: 1500 });
  };

  return (
    <DetailWrapper>
      <img src={imgUrl} alt={title} />
      <DetailInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(product, qty);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </DetailInfo>
    </DetailWrapper>
  );
}
