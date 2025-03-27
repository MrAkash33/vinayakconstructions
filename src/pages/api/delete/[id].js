import { supabase } from '@/supabase/supabase';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!id) {
    return res.status(400).json({ error: 'Missing ID' });
  }
  const { data, error: fetchError } = await supabase
    .from('projects') // Replace with your actual table name
    .select('url') // Column that stores the image path
    .eq('id', id)
    .single();
  if (fetchError) {
    return res.status(500).json({ error: `Failed to fetch image: ${fetchError.message}` });
  }

  const { error: deleteError } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (deleteError) {
    return res.status(500).json({ error: `Failed to delete record: ${deleteError.message}` });
  }
  if (data?.url) {
    let filePath = data.url;
    if (filePath.startsWith("http")) {
        const parts = filePath.split('/vinayakconstructions/'); 
        filePath = parts.length > 1 ? parts[1] : filePath;
    }

    const { error: storageError } = await supabase.storage
      .from('vinayakconstructions')
      .remove([filePath]);

    if (storageError) {
      return res.status(500).json({ error: `Failed to delete image: ${storageError.message}` });
    }

    console.log("File deleted successfully:", filePath);
}


  return res.status(200).json({ message: `Deleted ID ${id} successfully` });
}
