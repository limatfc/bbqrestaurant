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

  function editCategory(id, inputedData) {
    const categoryCopy = [...categories];
    inputedData.id = id;
    let findIndex = categoryCopy.findIndex((item) => item.id === id);
    categoryCopy.splice(findIndex, 1, inputedData);
    setCategories(categoryCopy);
  }

  const dataProvider = {
    categories,
    products,
    isLoggedIn,
    categoriesHandler,
    productsHandler,
    loginHandler,
    editCategory,
  };

  return (
    <dataContext.Provider value={dataProvider}>{children}</dataContext.Provider>
  );
}
