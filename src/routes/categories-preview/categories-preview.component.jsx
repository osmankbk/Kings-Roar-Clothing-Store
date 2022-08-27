import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categoriesContext.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return(
    <Fragment>
       {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} category={products}/>
          )
        })
      }
    </Fragment>
  )
}

export default CategoriesPreview;