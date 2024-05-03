import { toggleMode } from "@/state/themeSlice";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { Button } from "./ui/button";

const ModeToggle = () => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const dispatch = useDispatch();
  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  return (
    <div>
      <Button 
      onClick={toggleModeHandler}
      variant={isDarkMode ? "secondary" : "default"}
      className="px-3"
      >
        {isDarkMode ? <FaRegMoon size={16}/> : <FiSun size={16}/>}
      </Button>
    </div>
  );
};
export default ModeToggle;
