import { FC } from "react";
interface FooterProps {}
const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-gray-100 text-black p-4 text-center flex justify-between py-6 h-[120px]">
      <div>
        <p className="text-xs mt-2">New York City, New York</p>
        <p className="text-xs mt-2">Developed by Eshwar Tangirala</p>

        
      </div>
      <div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} LangFlow. All rights
        reserved.
      </p>
      <p className="text-xs mt-2">Eshwar's Linkedin: https://www.linkedin.com/in/eshwar-tangirala-08973316b/</p>

      </div>

      <div>
      <p className="text-xs mt-1">Contact Us: info@langflow.com</p>
      <p className="text-xs mt-1">Star us on Github: https://github.com/Eshwar1212-maker/flashcardsapp</p>

      </div>
    </footer>
  );
};

export default Footer;
