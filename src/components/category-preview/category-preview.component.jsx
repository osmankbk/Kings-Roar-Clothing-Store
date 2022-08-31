
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles';

import { Title, CategoryPreviewContainer, Previews } from './category-preview.styles';
const CategoryPreview = ({title, category}) => {

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{ title.toUpperCase() }</Title>
      </h2>
      <Previews>
        { 
          category
          .filter((_, index) => index < 4)
          .map( 
            (product) => <ProductCard key={product.id} product={product}/> 
            )
        }
      </Previews>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;