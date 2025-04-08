"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const Theme = () => {
    const {setTheme} = useTheme();
    

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="size-[1.2rem] rotate-0 scale-100
          transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0
          transition-all dark:rotate-0 dark:scale-100" 
          />
          <span
            className="sr-only"
          >Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        
        <DropdownMenuSeparator />
        <DropdownMenuItem  onClick={()=> setTheme("light")} > Light</DropdownMenuItem>
        <DropdownMenuItem  onClick={()=> setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem  onClick={()=> setTheme("system")}>System</DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
