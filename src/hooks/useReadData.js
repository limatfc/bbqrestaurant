import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firebase/fireStore";

export default function useReadData(updateContextStateFunction, path) {
  const [status, setStatus] = useState(0); //

  const readData = useCallback(
    async (updateContextStateFunction) => {
      try {
        const collectionCategories = await getCollection(path);
        updateContextStateFunction(collectionCategories);
        setStatus(1);
      } catch (error) {
        setStatus(2);
        const errorMessage = `Ops, it looks like there was a problem retrieving data from the database. The error is ${error.message}`;
        console.error(errorMessage);
      }
    },
    [path]
  );

  useEffect(() => {
    readData(updateContextStateFunction);
  }, [readData, updateContextStateFunction]);
  return { status };
}
