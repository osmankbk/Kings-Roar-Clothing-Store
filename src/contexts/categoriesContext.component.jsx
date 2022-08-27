import { useState, useEffect, createContext } from 'react';
// import SHOP_DATA from '../shop-data';
import { getCategoriesAndDocuments } from '../utilities/firebase/firebase.utilities';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      setCategoriesMap(categoryMap);
    }
   getCategoriesMap();
  }, [])

  // useEffect( () => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = {
    categoriesMap,
  }
  return <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
}

export default CategoriesProvider;