import { useCallback, useState } from "react";
import { dataContext } from "./data-context";

export function DataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categoriesHandler = useCallback((fetchedData) => {
    setCategories(fetchedData);
  }, []);

  const productsHandler = useCallback((fetchedData) => {
    setProducts(fetchedData);
  }, []);

  function loginHandler() {
    setIsLoggedIn(!isLoggedIn);
  }

  const dataProvider = {
    categories,
    products,
    isLoggedIn,
    categoriesHandler,
    productsHandler,
    loginHandler,
  };

  return (
    <dataContext.Provider value={dataProvider}>{children}</dataContext.Provider>
  );
}
