import { FC, useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/libs/supabase";


interface AuthPageProps {}
const AuthPage: FC<AuthPageProps> = ({}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Logged in successfully!');
      // Redirect or handle the successful login
    }
    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
     if (session) {
       navigate('/cards');
     }
   });
 }, [navigate]);
  return (
    <div className="w-full h-full flex">

      <div className="bg-[#0F1A20] w-[50vw] h-[100vh] py-20 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-3xl text-slate-400 ml-10">
            Master any topic
          </h2>
        </div>
        <div>
            <img 
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zMTkzNDYtaW1hZ2Uta3d2eWIzYnQuanBn.jpg"
            className="mx-auto rounded-sm w-[430px] h-[380px] mr-0"
            />
        </div>
        <div className="font-bold text-2xl text-white ml-10">
            <span className="">
              <img src="/logotwo.png" className="h-20 w-20 rounded-lg" />
            </span>
        </div>
      </div>

{/* ////////////////////////////////////////////////////////////////////// */}
      <div className=" w-[50vw] h-[100vh]">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            Sign In
          </button>
        </div>
        {message && (
          <p className="text-center text-red-500 mt-4">{message}</p>
        )}
      </form>
      </div>

    </div>
  );
};

export default AuthPage;
