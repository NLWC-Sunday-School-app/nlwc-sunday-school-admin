import request from ".";
import { IManualData } from "../types/types";

export const getManuals = () => request.get("/manuals");

export const getManual = (id: string) => request.get(`/manuals/${id}`);

export const getAllManuals = (
  sortBy: "oldest" | "newest",
  pageNumber: number
) => request.get(`/manuals?sortBy=${sortBy}&page=${pageNumber}`);

export const uploadManual = (manual: IManualData) =>
  request.post("/manuals", manual);

export const editManual = (id: string, manual: IManualData) =>
  request.patch(`/manuals/views/${id}`, manual);
