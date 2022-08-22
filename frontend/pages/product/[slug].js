import { useRouter } from "next/router";

import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

import {
  DetailWrapper,
  DetailInfo,
  Quantity,
  Buy,
} from "../../styles/SlugDetail";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function SlugDetail() {
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
  const { title, description, price, image } = data.products.data[0].attributes;
  const imgUrl = image.data.attributes.formats.medium.url;

  return (
    <DetailWrapper>
      <img src={imgUrl} alt={title} />
      <DetailInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiOutlineMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </DetailInfo>
    </DetailWrapper>
  );
}
