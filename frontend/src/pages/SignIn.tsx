 import { supabase } from "../libs/supabase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/authSlice";
import AuthForm from "@/components/AuthForm";
import {  PiBrainThin } from "react-icons/pi";
import one from "../assets/one.mp4"
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((v) => {
        if (v.data?.user) {
          dispatch(setUser(v.data?.user));
          navigate("/cards");
        } else {
          navigate("/");
        }
      });
    }
    getUserData();
  }, []);

  return (
    <div className="">
      <header className="flex justify-between py-10 px-20">
        <div className="flex gap-2">
        <span className="my-1">
            <PiBrainThin size={26}/>
          </span>
          <p className="text-[22px] font-mono">Learned</p>
        </div>
        <div>
          <AuthForm />
        </div>
      </header>
      <main className="text-center my-4 flex mx-auto max-w-[70%] gap-20 mr-40">
        <div className="py-10 space-y-6 lg:text-left max-w-[460px]">
          <h1 className="text-4xl text-slate-200 font-bold">Welcome to Learned</h1>
          <p className="text-lg text-white leading-8 font-light">
            Learn a new language quickly for your next trip,
            pass your next law exam or history test, we have your back. 
          </p>
          <Button className="bg-white text-black hover:bg-white hover:text-black">Get Started</Button>
        </div>
        <div>
        <video
          className=" bg-slate-300"
          width="600"
          height="400"
          aria-label="Workout log video"
          autoPlay
          muted
          loop
        >
          <source src={one} type="video/mp4" />
        </video>
        </div>
      </main>
      {/* <div className="text-center py-20">
        <p>Join 850+ students using Learned today!</p>
      </div> */}
    </div>
  );
};

export default SignIn;
