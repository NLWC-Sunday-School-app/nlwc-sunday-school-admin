import request from ".";
import { IManualData } from "../types/types";

export const getManuals = () => request.get("/manuals");

export const getAllManuals = (
  sortBy: "oldest" | "newest",
  pageNumber: number
) => request.get(`/manuals?sortBy=${sortBy}&page=${pageNumber}`);

export const uploadManual = (manual: IManualData) =>
  request.post("/manuals", manual);
