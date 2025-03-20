import { Feeling, Weather } from "src/types/aliases";
import ResponseDto from "../response.dto";

export default interface GetDiaryResponseDto extends ResponseDto{
  writeDate: string;
  weather: Weather;
  feeling: Feeling;
  title: string;
  content: string;
  writerId: string;
}