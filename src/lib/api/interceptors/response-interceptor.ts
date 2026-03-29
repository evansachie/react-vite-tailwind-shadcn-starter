import axios, { type AxiosError } from "axios";
import { AppError, type ErrorCode } from "@/lib/errors/app-error";

export function responseInterceptorError(error: AxiosError) {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      (error.response?.data as { message?: string } | undefined)?.message ??
      error.message ??
      "Request failed";

    const code = mapStatusToErrorCode(status);

    return Promise.reject(
      new AppError(message, {
        status,
        code,
        details: error.response?.data,
      }),
    );
  }

  return Promise.reject(
    new AppError("Unknown network error", {
      status: 500,
      code: "NETWORK_ERROR",
      details: null,
    }),
  );
}

function mapStatusToErrorCode(status?: number): ErrorCode {
  if (status === 401) return "UNAUTHORIZED";
  if (status === 403) return "FORBIDDEN";
  if (status === 404) return "NOT_FOUND";
  if (status === 422) return "VALIDATION_ERROR";
  if (status !== undefined && status >= 500) return "SERVER_ERROR";
  return "NETWORK_ERROR";
}
