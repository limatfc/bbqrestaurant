import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { fireStore } from "./firebase";

// Add a new document in collection "cities"
export async function editDocument(collection, documentId, content) {
  const cityRef = doc(fireStore, collection, documentId);
  setDoc(cityRef, content, { merge: true });
}

export async function addDocument(collection, documentId, content) {
  const cityRef = doc(fireStore, collection, documentId);
  setDoc(cityRef, content);
}

export async function deleteDocument(collection, documentId) {
  await deleteDoc(doc(fireStore, collection, documentId));
}
