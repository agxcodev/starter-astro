// Modules
import type { AstroCookies } from "astro";

// Is Logged In
export const isLoggedIn = (cookies: AstroCookies): boolean => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");

  return !!(accessToken && refreshToken);
};
