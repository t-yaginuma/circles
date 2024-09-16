import { createClient } from "@/libs/supabase/server";

export default async function useGetUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  // console.log("getUser======");
  // console.log(data);

  const loginUserId = data.user?.id;

  return { loginUserId };
}
