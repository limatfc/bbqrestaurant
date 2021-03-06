import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firebase/getCollection";

export default function useReadData(updateContextStateFunction, path) {
  const [status, setStatus] = useState(0); //

  const readData = useCallback(
    async (updateContextStateFunction) => {
      const collectionCategories = await getCollection(path);
      updateContextStateFunction(collectionCategories);
      setStatus(1);
    },
    [path]
  );

  useEffect(() => {
    readData(updateContextStateFunction);
  }, [readData, updateContextStateFunction]);
  return { status };
}
