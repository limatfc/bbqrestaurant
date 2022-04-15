import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "./firebase";

// Add a new document in collection "cities"
export async function setDocument(collection, documentId, content) {
  //   await setDoc(doc(fireStore, "categories", "LA"), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //   });

  const cityRef = doc(fireStore, collection, documentId);
  setDoc(cityRef, content, { merge: true });
}
