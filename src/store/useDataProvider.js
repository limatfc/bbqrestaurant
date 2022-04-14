import { useContext } from "react";
import { dataContext } from "./data-context";

export default function useDataProvider() {
  const context = useContext(dataContext);

  return context;
}
