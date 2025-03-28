import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useSearchBarStore } from "@/lib/store";
import dayjs from "dayjs";
import { useState } from "react";

export default function CalendarPopover({
  setFocuseElement,
  isElementFocused,
}: {
  setFocuseElement: (value: string) => void;
  isElementFocused: (id: string) => boolean;
}) {
  const setDepartDate = useSearchBarStore((state) => state.setDepartDate);
  const departDate = useSearchBarStore((state) => state.departDate);
  const [open, setOpen] = useState(false);

  const openPopover = () => setOpen(true);
  const closePopover = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn("bg-gray-100 p-4 rounded-md transition-all duration-100 ease-in-out border-2 flex flex-col justify-between select-none", isElementFocused("depart") ? "border-primary" : "")}
          tabIndex={0}
          onClick={() => openPopover()}
          onFocus={() => {
            setFocuseElement("depart");
          }}
        >
          <p className="font-light text-muted-foreground">Departure</p>
          <p className="font-bold text-base">{dayjs(departDate).format("ddd, DD MMM")}</p>
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <Calendar mode="single" selected={departDate.toDate()} onSelect={(date) => {setDepartDate(dayjs(date)); closePopover();}} className="rounded-md" />
      </PopoverContent>
    </Popover>
  );
}
