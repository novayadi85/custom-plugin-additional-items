import Query from "./Query/index.js";
import CatalogProduct from "./CatalogProduct/index.js";

export default {
  Query,
  Product: {
    Period: (node, context) => {
      return "1 Month"
    },
  },
  CartItem: {
    Period: (node, context) => {
      return "1 Month"
    }
  },
  CatalogProduct,
};
