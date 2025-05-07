const { getProduct, getProducts, addProduct, updateProduct, deleteProduct} = require("./product.resolvers");

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

    // Product
    product: getProduct,
    products: getProducts
  },

  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers;
