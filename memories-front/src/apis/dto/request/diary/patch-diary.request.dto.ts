import { Feeling, Weather } from "src/types/aliases";

// interface: patch diary request body DTO //
export default interface PatchDiaryRequestDto {
  weather: Weather;
  title: string;
  content: string;
  feeling: Feeling;
}