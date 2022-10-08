import request from ".";

export const getManuals = () => request.get("/manuals");

export const postManuals = (manual: {
  theme: string;
  topic: string;
  text: string;
  lesson: string;
  header_image: string;
  body: string;
  summary: string;
}) => request.post("/manuals", manual);
