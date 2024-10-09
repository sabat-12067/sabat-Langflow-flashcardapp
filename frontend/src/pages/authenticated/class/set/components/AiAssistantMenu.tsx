import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC } from "react";
interface AiAssistantMenuProps {}
const AiAssistantMenu: FC<AiAssistantMenuProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="absolute bottom-4 right-2 rounded-full text-[8px] bg-slate-600"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          LangFlow Ai
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-white bg-black">
        <DropdownMenuLabel>
            Get Ai assistance with: 
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        className="text-[12px]"
        >
          Pronounciation
        </DropdownMenuItem>
        <DropdownMenuItem
        className="text-[12px]"
        >
          Different Synonyms
        </DropdownMenuItem>
        <DropdownMenuItem
        className="text-[12px]"
        >
          Pronounciation
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AiAssistantMenu;
