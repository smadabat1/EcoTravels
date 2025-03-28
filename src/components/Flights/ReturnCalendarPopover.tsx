import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useSearchBarStore } from "@/lib/store";
import dayjs from "dayjs";

export default function ReturnCalendarPopover({
  setFocuseElement,
  isElementFocused,
}: {
  setFocuseElement: (value: string) => void;
  isElementFocused: (id: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const mode = useSearchBarStore((state) => state.mode);
  const setReturnDate = useSearchBarStore((state) => state.setReturnDate);
  const returnDate = useSearchBarStore((state) => state.returnDate);
  const closePopover = () => setOpen(false);

  const handleOpenChange = (newOpenState: boolean) => {
    if (mode === "roundtrip" || !newOpenState) {
      setOpen(newOpenState);
    }
  };

  const handleClick = (e: any) => {
    if (mode !== "roundtrip") {
      // Prevent the PopoverTrigger from processing this click
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "bg-gray-100 p-4 rounded-md transition-all duration-100 ease-in-out border-2 flex flex-col justify-between select-none",
            isElementFocused("return") ? "border-primary" : "",
            mode === "roundtrip" ? "" : "opacity-50 cursor-not-allowed"
          )}
          onClick={handleClick}
          tabIndex={mode === "roundtrip" ? 0 : -1}
          onFocus={() => {
            mode === "roundtrip" ? setFocuseElement("return") : null;
          }}
        >
          <p className="font-light text-muted-foreground">Return</p>
          <p className="font-bold text-base">{dayjs(returnDate).format("ddd, DD MMM")}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar mode="single" selected={returnDate.toDate()} onSelect={(date) => {setReturnDate(dayjs(date)); closePopover();}} className="rounded-md" />
      </PopoverContent>
    </Popover>
  );
}
