"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC, useState } from "react";
interface AiAssistantMenuProps {
  word: string;
  handleUpdateAI: (word: string) => void
}
type AiOptions = "PRONOUNCE" | "SYNONYMS" | "EXAMPLE" | "";

const AiAssistantMenu: FC<AiAssistantMenuProps> = ({ word, handleUpdateAI}) => {

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
        <DropdownMenuLabel>Get Ai assistance with:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-[12px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleUpdateAI("Pronounciation")
          }}
        >
          Pronounciation
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-[12px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleUpdateAI("Synonym")
          }}
        >
          Different Synonyms
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-[12px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleUpdateAI("Example Sentence")
          }}
        >
          Sentence Example
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AiAssistantMenu;
