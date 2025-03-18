import ResponseDto from "../response.dto";

export default interface GetDiaryResponseDto extends ResponseDto{
  writeDate: string;
  weather: string;
  feeling: string;
  title: string;
  content: string;
  writerId: string;
}