const {ApolloServer} = require("apollo-server-express");

const {ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core");

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int!): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getID: ID
    getNumbers(numbers: [Int!]!): [Int]
    getProduct: Product
}

type Product {
  id: ID!
  name: String!
  price: Float!
  description: String!
  image: String!
  createdAt: String!
  }
`;
// for list definitions
//[String]
//[Int]


const resolvers = {
  Query: {
    hello: () => "Hello World!",
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old!`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => "Some string",
    getBoolean: () => true,
    getID: () => "1adk2k445k",
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: "12312312",
        name: "Product 1",
        price: 100.12,
        description: "Great! awesome product",
        image: "http://myimage.asdl.jpeg",
        createdAt: new Date().toISOString(),
      }
    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });
  await server.start();
  server.applyMiddleware({app})
}

module.exports = useGraphql;