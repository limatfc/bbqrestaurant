import { cloudStorage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export async function uploadFile(file, fileName) {
  const fileReference = ref(cloudStorage, fileName);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}

export async function deleteFile(fileName) {
  const fileReference = ref(cloudStorage, fileName);

  await deleteObject(fileReference);
}
