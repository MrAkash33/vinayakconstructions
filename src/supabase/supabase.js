import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gxjxmcdjbqqrdppnhvli.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4anhtY2RqYnFxcmRwcG5odmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4Mjg1NTYsImV4cCI6MjA1ODQwNDU1Nn0.XwO7gQuxvGPopMOXPExDmb5MsKYOkWrtT8GxstB4W5A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
