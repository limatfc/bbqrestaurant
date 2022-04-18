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

  function addCategory(id, inputedData) {
    const categoryCopy = [...categories];
    inputedData.id = id;
    categoryCopy.push(inputedData);
    setCategories(categoryCopy);
  }

  function deleteCategory(id) {
    const categoryCopy = [...categories];
    let findIndex = categoryCopy.findIndex((item) => item.id === id);
    categoryCopy.splice(findIndex, 1);
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
    addCategory,
    deleteCategory,
  };

  return (
    <dataContext.Provider value={dataProvider}>{children}</dataContext.Provider>
  );
}
