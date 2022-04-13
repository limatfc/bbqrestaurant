import { useCallback, useState } from "react";
import { dataContext } from "./data-context";

export function DataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const categoriesHandler = useCallback((fetchedData) => {
    setCategories(fetchedData);
  }, []);

  function productsHandler(fetchedData) {
    setProducts(fetchedData);
  }

  const dataProvider = {
    categories,
    products,
    categoriesHandler,
    productsHandler,
  };

  return (
    <dataContext.Provider value={dataProvider}>{children}</dataContext.Provider>
  );
}
