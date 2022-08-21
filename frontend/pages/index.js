import Head from "next/head";
import Link from "next/link";

import { Gallery } from "../styles/Gallery";
import Product from "../components/Product";

import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

export default function Home() {
  // Fetch from `strapi` with `urql` and graphql query:
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no! {error.message}</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Superdry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Superdry+</h1>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
        {/* <Link href={"/about"} children="About" /> */}
      </main>
    </div>
  );
}
