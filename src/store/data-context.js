import { createContext } from "react";

export const dataContext = createContext({
  categories: [],
  products: [],
  isLoggedIn: false,
  categoriesHandler: (fetchedData) => {},
  productsHandler: (fetchedData) => {},
  loginHandler: () => {},
});
