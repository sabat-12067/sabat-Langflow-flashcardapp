import { FC, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../libs/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {useSelector } from "react-redux";

interface AuthFormProps {}
const AuthForm: FC<AuthFormProps> = ({}) => {

  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user)


  useEffect(() => {
     supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/cards');
      }
    });
  }, [navigate]);



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#020617] p-8">
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
