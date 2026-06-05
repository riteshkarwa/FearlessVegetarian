import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://widnaizthfafukqikisf.supabase.co";
const supabaseAnonKey = "sb_publishable_UObcEt7ZaKLg6KYQI3JmAw_1bjvgSGT";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);