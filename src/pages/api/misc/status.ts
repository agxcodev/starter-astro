// Modules
import type { APIRoute } from "astro";

// Route
export const GET: APIRoute = async () => {
  return new Response("OK", {
    status: 200,
  });
};
