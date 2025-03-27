import { supabase } from "@/supabase/supabase";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("Hey I am Calling")
    const { file, filename, heading, description } = req.body;
    if (!file || !filename || !heading || !description) {
      return res.status(400).json({ error: "File, filename, heading, and description are required" });
    }

    const fileBuffer = Buffer.from(file, "base64");
    const { data, error } = await supabase.storage.from("vinayakconstructions").upload(`uploads/${filename}`, fileBuffer, {
      contentType: "image/png", 
      upsert: true,
    });

    if (error) {
      throw error;
    }

    const { data: urlData } = supabase.storage
    .from("vinayakconstructions")
    .getPublicUrl(`uploads/${filename}`);

    console.log("Public URL:", urlData.publicUrl);
    const { data: dbData, error: dbError } = await supabase
      .from("projects")
      .insert([{ url: urlData.publicUrl, heading, description }]);

    if (dbError) {
      throw dbError;
    }

    return res.status(200).json({ url: urlData.publicUrl, heading, description, message: "Image uploaded successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
