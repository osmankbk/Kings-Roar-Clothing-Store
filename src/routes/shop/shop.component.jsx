import { useContext } from "react";
import './shop.styles.scss';
import { ProductsContext } from "../../contexts/productsContext.component";
import ProductsCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return(
    <div className="products-container">
      {products.map((product) => (
        <ProductsCard key={product.id} products={ product } />
      ))}
    </div>
  )
}

export default Shop;