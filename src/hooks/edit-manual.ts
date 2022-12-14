import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uploadImage } from "../services/images";
import { editManual, getManual } from "../services/manual";
import { IManualData } from "../types/types";

const useEditManual = () => {
  const [manualData, setManualData] = useState<IManualData>({
    theme: "",
    topic: "",
    text: [""],
    lesson: "",
    header_image: "test",
    body: "",
    manual_date: "",
    summary: "",
    memory_track: "",
    views: 0,
    is_visible: 0,
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setupLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File>();
  const [uploadSucess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getManual(id)
      .then((res) => {
        setManualData(res.data);
        console.log(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUploadError("");
    if (imageFile) {
      setupLoading(true);
      uploadImage(imageFile).then((res) => {
        setManualData({
          ...manualData,
          // text: JSON.parse(manualData.text),
          header_image: res.data.image,
        });
        editManual(id, { ...manualData, header_image: res.data.image })
          .then((res) => {
            setUploadSuccess(true);
            setupLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setUploadError("An error occured, please try again.");
            setupLoading(false);
          });
      });
    } else {
      setupLoading(true);
      editManual(id, manualData)
        .then((res) => {
          setUploadSuccess(true);
          setupLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploadError("An error occured, please try again.");
          setupLoading(false);
        });
    }
  };
  return {
    manualData,
    setManualData,
    loading,
    handleEdit,
    uploading,
    imageFile,
    setImageFile,
    uploadSucess,
    uploadError,
  };
};
export default useEditManual;
