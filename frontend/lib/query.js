export const PRODUCT_QUERY = `
query {
  products {
    data {
      attributes {
        slug
        title
        description
        price
        image{
          data{
            attributes {
              formats 
            }
          }
        }
      }
    }
  }
}
`;
