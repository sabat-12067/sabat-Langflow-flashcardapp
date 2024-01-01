import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const handleSignOut = async () => {
    const navigate = useNavigate()
    const { error } = await supabase.auth.signOut();
    navigate("/")
  };