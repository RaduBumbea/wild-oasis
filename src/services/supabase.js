import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://osfloslxmifbbwkjnjpz.supabase.co";
const supabaseKey = "sb_publishable_w14BPYHtqmurAvtcvhW2SA_2S-E74RV";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
