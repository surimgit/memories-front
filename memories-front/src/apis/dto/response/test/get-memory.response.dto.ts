// interface: get memory response body DTO /

import { MemoryTest } from "src/types/interfaces";
import ResponseDto from "../response.dto";

export default interface GetMemoryResponseDto extends ResponseDto{
  memoryTests: MemoryTest[];
}
