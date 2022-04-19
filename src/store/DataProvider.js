import { useCallback, useState } from "react";
import { dataContext } from "./data-context";
import { editState, addState, deleteState } from "../scripts/logic/state";

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
    const result = editState(categories, id, inputedData);
    setCategories(result);
  }

  function addCategory(id, inputedData) {
    const result = addState(categories, id, inputedData);
    setCategories(result);
  }

  function deleteCategory(id) {
    const result = deleteState(categories, id);
    setCategories(result);
  }

  function editProduct(id, inputedData, URLName) {
    const result = editState(products, id, inputedData);
    setProducts(result);
  }

  function addProduct(id, inputedData) {
    const result = addState(products, id, inputedData);
    setProducts(result);
  }

  function deleteProduct(id) {
    const result = deleteState(products, id);
    setProducts(result);
  }

  const value = {
    categories,
    products,
    isLoggedIn,
    categoriesHandler,
    productsHandler,
    loginHandler,
    editCategory,
    addCategory,
    deleteCategory,
    editProduct,
    addProduct,
    deleteProduct,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}
