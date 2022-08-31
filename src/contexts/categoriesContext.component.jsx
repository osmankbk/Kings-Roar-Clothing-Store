import { useState, useEffect, createContext } from 'react';
import { getCategoriesAndDocuments } from '../utilities/firebase/firebase.utilities';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
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