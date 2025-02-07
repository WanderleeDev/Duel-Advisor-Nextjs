"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import ExagonMenu from "../icons/ExagonMenu";
import Home from "../icons/Home";
import Key from "../icons/Key";
import User from "../icons/User";
import { Paragraph } from "../Typography/Paragraph";
import { cn } from "@/lib/utils";
import { ArrowLeftFromLine } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";

const dockItems = [
  { name: "Home", icon: <Home /> },
  { name: "Directory", icon: <ExagonMenu /> },
  { name: "Info", icon: <Key /> },
  { name: "Profile", icon: <User /> },
  { name: "Back", icon: <ArrowLeftFromLine /> },
];

export default function Dock({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useTransitionRouter();

  const navigateTo = (path: string) => {
    if (path === "home") {
      return router.push("/");
    }

    if (path === "back") {
      return router.back();
    }

    router.push(`/${path}`);
  };

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => setIsVisible(false), 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 flex justify-center items-center pointer-events-none",
        className
      )}
      {...props}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="pointer-events-auto mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.div
              className="flex items-center gap-4 px-6 py-3 bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TooltipProvider>
                {dockItems.map(({ icon, name }, index) => {
                  const isHovered = hoveredIndex === index;
                  const scale =
                    hoveredIndex === null ? 1 : isHovered ? 1.25 : 0.8;

                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.button
                          className="p-3 rounded-xl hover:bg-gray-500/50 transition-colors"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onClick={() => navigateTo(name.toLocaleLowerCase())}
                          animate={{
                            scale,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            },
                          }}
                        >
                          <div className="w-6 h-6">{icon}</div>
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-gray-900 text-gray-100 border-gray-800"
                      >
                        <Paragraph>{name}</Paragraph>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
