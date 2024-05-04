import { FC } from "react";
import AuthForm from "./AuthForm";
interface AuthPageProps {}
const AuthPage: FC<AuthPageProps> = ({}) => {
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
      </div>

    </div>
  );
};

export default AuthPage;
