export interface ServerResponse<ResultT extends Object> {
  result: ResultT | null;
  success: boolean;
  error: {details?: string} | null;
  unAuthorizedRequest: boolean;
}
