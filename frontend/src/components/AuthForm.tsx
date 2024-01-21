import { FC } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../libs/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

interface AuthFormProps {}
const AuthForm: FC<AuthFormProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">Sign in</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#020617]">
        <Auth
          supabaseClient={supabase}
          providers={["google"]}
          appearance={{
            style: {
                label: {color: "white"},
                button: {border: "1px solid white"}
            },
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
          theme="dark"
        />
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
