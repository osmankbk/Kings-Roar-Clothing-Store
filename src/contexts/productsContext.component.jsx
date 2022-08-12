import { useState, useEffect, createContext } from "react";
import PRODUCTS from '../../src/shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = {
    products,
  }

  useEffect(() => {
    setProducts(PRODUCTS);
  }, [])


  return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}

export default ProductsProvider;