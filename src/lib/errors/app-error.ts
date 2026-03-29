export type ErrorCode =
  | "NETWORK_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_ERROR"
  | "SERVER_ERROR"
  | "UNKNOWN_ERROR";

export class AppError extends Error {
  readonly status?: number;
  readonly code: ErrorCode;
  readonly details?: unknown;

  constructor(
    message: string,
    options?: { status?: number; code?: ErrorCode; details?: unknown },
  ) {
    super(message);
    this.name = "AppError";
    this.status = options?.status;
    this.code = options?.code ?? "UNKNOWN_ERROR";
    this.details = options?.details;
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

export function toAppError(
  error: unknown,
  fallbackMessage = "Something went wrong",
) {
  if (isAppError(error)) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message || fallbackMessage, {
      code: "UNKNOWN_ERROR",
      details: error,
    });
  }

  return new AppError(fallbackMessage, {
    code: "UNKNOWN_ERROR",
    details: error,
  });
}

export function getErrorMessage(
  error: unknown,
  fallbackMessage = "Something went wrong",
) {
  return toAppError(error, fallbackMessage).message;
}
