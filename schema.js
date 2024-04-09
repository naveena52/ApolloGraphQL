const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
    message :String
  }

  type Mutation {
    setMessage(message: String!): String
  }
`;

module.exports = { typeDefs };
