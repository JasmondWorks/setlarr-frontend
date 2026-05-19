export type ApiResponse<T> = {
  message: string;
  result: T;
  status: "success" | "error";
  statusCode: string;
  success: boolean;
};
