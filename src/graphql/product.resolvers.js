const getProduct = () => {
  return {
        id: "12312312",
        name: "Product 1",
        price: 100.12,
        description: "Great! awesome product",
        image: "http://myimage.asdl.jpeg",
        createdAt: new Date().toISOString(),
      }
};

const getProducts = () => {
  return [];
};

module.exports = {
  getProduct,
  getProducts
}
