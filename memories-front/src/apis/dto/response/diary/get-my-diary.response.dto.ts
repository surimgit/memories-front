// interface: get my diary response DTO //

import { ResponseDto } from "src/apis/dto/response";
import { Diary } from "src/types/interfaces";
export default interface GetMyDiaryResponseDto extends ResponseDto{
  diaries: Diary[];
}