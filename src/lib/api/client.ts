import axios from "axios";

import { env } from "@/lib/env";
import { requestInterceptor } from "@/lib/api/interceptors/request-interceptor";
import { responseInterceptorError } from "@/lib/api/interceptors/response-interceptor";

export const apiClient = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(requestInterceptor);
apiClient.interceptors.response.use(
  (response) => response,
  responseInterceptorError,
);
