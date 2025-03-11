import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CalendarPopover from "./CalendarPopover";
import ReturnCalendarPopover from "./ReturnCalendarPopover";
import PassengerPopover from "./PassengerPopover";

export default function SearchInput() {
  const pulsateVariants: any = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const [focusedElement, setFocuseElement] = useState<string>("");

  const isElementFocused = (id: string): boolean => {
    return id === focusedElement;
  };

  return (
    <div className="grid grid-cols-8 gap-2">
      <div
        className={cn(
          "col-span-2 bg-gray-100 p-4 rounded-md flex flex-col gap-y-2 transition-all duration-100 ease-in-out border-2",
          isElementFocused("from") ? "border-primary" : ""
        )}
      >
        <p
          className={cn("transition-all duration-200 ease-in-out", isElementFocused("from") ? "text-primary font-medium" : "text-muted-foreground font-light")}
        >
          From
        </p>
        <Input
          tabIndex={0}
          className="border-none shadow-none rounded-none focus-visible:ring-0 p-0 font-bold md:text-xl"
          onFocus={() => setFocuseElement("from")}
          onBlur={() => setFocuseElement("")}
        />
      </div>
      <div
        className={cn(
          "col-span-2 bg-gray-100 p-4 rounded-md flex flex-col gap-y-2 transition-all duration-100 ease-in-out border-2",
          isElementFocused("to") ? "border-primary" : ""
        )}
      >
        <p className={cn("transition-all duration-200 ease-in-out", isElementFocused("to") ? "text-primary font-medium" : "text-muted-foreground font-light")}>
          To
        </p>
        <Input
          tabIndex={0}
          className="border-none shadow-none rounded-none focus-visible:ring-0 p-0 font-bold md:text-xl"
          onFocus={() => setFocuseElement("to")}
          onBlur={() => setFocuseElement("")}
        />
      </div>
      <CalendarPopover setFocuseElement={setFocuseElement} isElementFocused={isElementFocused} />
      <ReturnCalendarPopover setFocuseElement={setFocuseElement} isElementFocused={isElementFocused} />
      <PassengerPopover setFocuseElement={setFocuseElement} isElementFocused={isElementFocused} />
      <div
        className="bg-primary p-4 rounded-md flex justify-center items-center gap-x-2"
        tabIndex={0}
        onFocus={() => setFocuseElement("select")}
        onBlur={() => setFocuseElement("")}
      >
        <p className="text-primary-foreground text-3xl">Search</p>
        <motion.div variants={pulsateVariants} animate="animate" style={{ display: "inline-flex" }}>
          <ChevronRight className="text-primary-foreground mt-1" size={24} />
        </motion.div>
      </div>
    </div>
  );
}
