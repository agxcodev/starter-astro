// Modules
import type { APIRoute } from "astro";

// Route
import { supabase } from "@/helpers/supabase.helper";

// Controller
export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    return new Response("Email and password are required", {
      status: 400,
    });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, {
      status: 500,
    });
  }

  return redirect("/login");
};
