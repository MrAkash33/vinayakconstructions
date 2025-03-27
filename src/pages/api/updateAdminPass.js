const { supabase } = require("@/supabase/supabase");


export default async function handler(req, res) {
  if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
      const {password } = req.body;

      if (!password) {
          return res.status(400).json({ error: "Missing required fields" });
      }

      const { data, error } = await supabase
          .from("admin")
          .update({ password: password })
          .eq("id", 3);

      if (error) {
          throw error;
      }

      return res.status(200).json({ message: "Password updated successfully", data });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
// Example usage

