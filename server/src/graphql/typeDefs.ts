const typeDefs = `#graphql
  type Category {
    color: String
    name: String
    salesTarget: Int
  }

  type Sale {
    product: String
    salesRevenue: Int
    region: String
    category: Category
  }

  type Query {
    sales: [Sale]
  }
`;

export default typeDefs;