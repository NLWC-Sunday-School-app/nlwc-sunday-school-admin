import { useEffect, useState } from "react";
import { getAllManuals } from "../services/manual";
import { IManuals } from "../types/types";



const useAllManuals = () => {
  const [manuals, setManuals] = useState<IManuals[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalManual, setTotalManual] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllManuals(sortBy, pageNumber)
      .then((res) => {
        setManuals(res.data.data);
        setTotalManual(res.data.total);
        setLastPage(res.data.last_page);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pageNumber, sortBy]);
  return {
    manuals,
    loading,
    totalManual,
    lastPage,
    pageNumber,
    setPageNumber,
    setSortBy,
  };
};

export default useAllManuals;
