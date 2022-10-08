import request from ".";
import { IManualData } from "../types/types";

export const uploadImage = (imageFile: File) => {
  let form_data = new FormData();
  form_data.append("image", imageFile);
  return request.post("/images", form_data);
};
