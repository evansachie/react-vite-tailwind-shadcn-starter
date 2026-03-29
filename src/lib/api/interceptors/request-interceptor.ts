import type { InternalAxiosRequestConfig } from "axios";

export function requestInterceptor(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem("auth_token");

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  config.headers.set("X-Requested-With", "XMLHttpRequest");
  return config;
}
