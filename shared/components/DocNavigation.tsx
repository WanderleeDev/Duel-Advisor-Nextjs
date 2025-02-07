"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ExagonMenu from "../icons/ExagonMenu";
import User from "../icons/User";
import Home from "../icons/Home";
import Key from "../icons/Key";
import { Link } from "next-view-transitions";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockNavigation() {
  const menuOptions = [
    { name: "Home", icon: <Home /> },
    { name: "Directory", icon: <ExagonMenu /> },
    { name: "Info", icon: <Key /> },
    { name: "Profile", icon: <User /> },
  ];

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <Dock iconMagnification={60} iconDistance={100}>
          {menuOptions.map((option, i) => (
            <DockIcon
              key={i}
              className="bg-white/10 hover:bg-white/30 transition-colors"
            >
              <Link
                className="contents"
                key={option.name}
                href={"/" + `${i === 0 ? "" : option.name.toLowerCase()}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>{option.icon}</TooltipTrigger>
                  <TooltipContent className="-translate-y-2">
                    <p>{option.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </TooltipProvider>
  );
}
