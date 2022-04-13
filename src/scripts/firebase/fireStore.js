import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "./firebase";

export async function getCollection(path) {
  const collectionPath = collection(fireStore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return documents;
}
