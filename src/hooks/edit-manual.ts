import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editManual, getManual } from "../services/manual";
import { IManualData } from "../types/types";

const useEditManual = () => {
  const [manualData, setManualData] = useState<IManualData>({
    theme: "",
    topic: "",
    text: "",
    lesson: "",
    header_image: "test",
    body: "",
    manual_date: "",
    summary: "",
    memory_track: "",
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setupLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getManual(id)
      .then((res) => {
        console.log(res.data);
        setManualData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setupLoading(true);
    e.preventDefault();
    console.log(manualData);

    editManual(id, manualData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { manualData, setManualData, loading, handleEdit, uploading };
};
export default useEditManual;
