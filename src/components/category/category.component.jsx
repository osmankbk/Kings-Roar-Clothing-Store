import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categoriesContext.component';
import ProductsCard from '../product-card/product-card.component';

import { CategoryTitle, CategoryContainer } from './category.styles';

import './category.styles';

const Category = () => {

const { category } = useParams();
const { categoriesMap } = useContext(CategoriesContext);
const [products, setProducts ] = useState(categoriesMap[category]);

useEffect(() => {
  setProducts(categoriesMap[category]);
}, [category, categoriesMap])

 return (
  <Fragment>
    <CategoryTitle> { category.toUpperCase() } </CategoryTitle>
    <CategoryContainer>
     { products && products.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </CategoryContainer>
  </Fragment>
 )
}

export default Category;