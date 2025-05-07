const ProductService = require("../services/product.service");
const service = new ProductService();

/**
 * Thanks to apollo server we are able to return a promis
 * without the use of async await.
 * GraphQl is great handling promises, particullary Apollo Server.
 */
const getProduct = (_, {id}) => {
  return service.findOne(id);
};

const getProducts = async () => {

  return service.find({});
};

const addProduct = (_, { dto }) => {
  return service.create(dto);
}

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
