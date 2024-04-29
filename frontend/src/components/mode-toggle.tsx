import { FaRegMoon } from "react-icons/fa6";

import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
        <div className="flex justify-between full w-40" onClick={() => setTheme("light")}>
          <div>Theme</div>
          <div className="my-auto">
          <FaRegMoon size={20}/>
          </div>
        </div>
 
  )
}
