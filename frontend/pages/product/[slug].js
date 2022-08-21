import { useRouter } from "next/router";

import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

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

  const { title, description, price, image } = data.products.data[0].attributes;
  const imgUrl = image.data.attributes.formats.medium.url;
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <span>{price}</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
    </div>
  );
}
