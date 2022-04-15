import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "./firebase";

// Add a new document in collection "cities"
export async function setDocument() {
  //   await setDoc(doc(fireStore, "categories", "LA"), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //   });

  const cityRef = doc(fireStore, "categories", "L");
  setDoc(
    cityRef,
    {
      pais: "brasil",
      name: "New York",
      country: "United States",
      capital: true,
    },
    { merge: true }
  );
}
