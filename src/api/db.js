import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gxwlekfbynzxfudqdpcq.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchData() {
  const { data: user_list, error } = await supabase
    .from("user_list")
    .select("*");

  return { user_list, error };
}
