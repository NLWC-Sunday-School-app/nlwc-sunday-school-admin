export interface IManuals {
  topic: string;
  header_image: string;
  manual_date: string;
  id: string;
  views: number;
}
export interface IManualData {
  theme: string;
  topic: string;
  text: string[];
  lesson: string;
  header_image: string;
  memory_track: string;
  manual_date: string;
  body: string;
  summary: string;
  views: number;
  is_visible: 1 | 0;
}
