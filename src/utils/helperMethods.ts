import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { storage } from "@/utils/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { debug_mode } from "@/debug-controller";

export const uploadImage = async ({
  image,
  imageCategory,
}: {
  image: Blob | null;
  imageCategory: "PROFILE_PICTURE" | "POST_IMAGE";
}): Promise<{ success: boolean; imageURL?: string; error?: any }> => {
  if (image === null) return { success: false, error: "image is set to null" };

  if (image.type !== "image/jpeg" && image.type !== "image/png")
    return { success: false, error: "File type is not jpeg or png" };

  if (image.size > 2097152)
    return { success: false, error: "Image size is greater than 2MB" };

  const folderName =
    imageCategory === "PROFILE_PICTURE" ? "profilePictures" : "postImages";

  const imageRef = ref(storage, `${folderName}/${image?.name + uuidv4()}`);

  try {
    const snapshot = await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(snapshot.ref);
    if (debug_mode) {
      console.log("File available at", imageURL);
    }
    return { success: true, imageURL };
  } catch (error) {
    console.log({ success: false, error });
    return { success: false, error };
  }
};
