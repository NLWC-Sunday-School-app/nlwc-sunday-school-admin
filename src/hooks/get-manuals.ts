import { useEffect, useState } from "react";
import { getManuals } from "../services/manual";
import { IManuals } from "../types/types";

const useManuals = () => {
  const [manuals, setManuals] = useState<IManuals[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalManual, setTotalManual] = useState(0);

  useEffect(() => {
    getManuals()
      .then((res) => {
        console.log(res.data.data);
        
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

export default useManuals;
