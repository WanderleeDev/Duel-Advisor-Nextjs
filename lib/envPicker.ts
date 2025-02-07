import { InvalidEnvError } from "@/shared/utils/EnvError.class";

const { NEXT_PUBLIC_API_URL, API_URL } = process.env;

export function envPicker(): string | never {
  if (!NEXT_PUBLIC_API_URL && !API_URL) {
    throw new InvalidEnvError("NEXT_PUBLIC_API_URL is not defined");
  }

  return `${NEXT_PUBLIC_API_URL ?? API_URL}`;
}
