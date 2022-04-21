import { cloudStorage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadFile(file, fileName) {
  const fileReference = ref(cloudStorage, fileName);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}
