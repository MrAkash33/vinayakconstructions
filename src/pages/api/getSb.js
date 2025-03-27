import { supabase } from "@/supabase/supabase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Fetch all data from the "admin" table
    let { data: admins, error } = await supabase.from("admin").select("*");

    // Handle Supabase errors
    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    // Send the retrieved data in the response
    res.status(200).json({ message: "Admins fetched successfully", admins });
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
