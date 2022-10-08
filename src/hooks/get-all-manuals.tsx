import { useEffect, useState } from "react";
import { getManuals } from "../services/manual";

const useAllManuals = () => {
  const [manuals, setManuals] = useState([
    { topic: "", header_image: "", manual_date: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const [totalManual, setTotalManual] = useState(0);

  useEffect(() => {
    getManuals()
      .then((res) => {
        setManuals(res.data.data);
        setTotalManual(res.data.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return { manuals, loading, totalManual };
};

export default useAllManuals;
