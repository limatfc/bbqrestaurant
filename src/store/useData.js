import { useContext } from "react";
import { dataContext } from "./data-context";

export default function useData() {
  const context = useContext(dataContext);

  return context;
}
