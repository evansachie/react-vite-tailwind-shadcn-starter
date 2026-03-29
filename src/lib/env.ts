import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.url("VITE_API_BASE_URL must be a valid URL"),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  const details = parsedEnv.error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("\n");

  throw new Error(`Invalid environment variables:\n${details}`);
}

export const env = parsedEnv.data;
