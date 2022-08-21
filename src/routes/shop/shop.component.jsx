import { useContext } from "react";

import { ProductsContext } from "../../contexts/productsContext.component";
import ProductsCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return(
    <div className="products-container">
      {products.map((product) => (
        <ProductsCard key={product.id} product={ product } />
      ))}
    </div>
  )
}

export default Shop;