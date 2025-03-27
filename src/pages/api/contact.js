import { supabase } from "@/supabase/supabase";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
      }
    
      try {
        const { name, email, phone, message,subject } = req.body;
    
        // Log incoming request data
    
        // Ensure required fields are present
        if (!name || !email || !phone) {
          console.error("Error: Missing required fields");
          return res.status(400).json({ error: "Missing required fields" });
        }
    
        // Insert data into Supabase
        const { data, error } = await supabase.from("contactus").insert([{ name, email, phone, message,subject }]);
    
        // Log Supabase response
        console.log("Supabase Response:", data, error);
    
        // If Supabase returns an error, throw it
        if (error) {
          console.error("Supabase Error:", error);
          throw error;
        }
    
        res.status(200).json({ message: "User added", data });
      } catch (error) {
        console.error("API Error:", error.message);
        res.status(500).json({ error: error.message });
      }
}
