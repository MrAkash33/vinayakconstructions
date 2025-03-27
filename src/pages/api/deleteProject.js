
import { supabase } from '@/supabase/supabase';
import { NextResponse } from 'next/server';


export async function DELETE(req, { params }) {
  const { id } = params;

  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

  // Fetch the image URL before deleting the record
  const { data, error: fetchError } = await supabase
    .from('projects') // Replace with your actual table name
    .select('url') // Column that stores the image path
    .eq('id', id)
    .single();

  if (fetchError) return NextResponse.json({ error: fetchError.message }, { status: 500 });

  // Delete the record from Supabase Database
  const { error: deleteError } = await supabase
    .from('projects')
    .delete()
    .match({ id });

  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 });

  // If there is an image URL, delete the image from Supabase Storage
  if (data?.image_url) {
    const { error: storageError } = await supabase.storage
      .from('vinayakconstructions') // Replace with your storage bucket name
      .remove([data.image_url]); // Path to the image

    if (storageError) return NextResponse.json({ error: storageError.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Deleted successfully' }, { status: 200 });
}
