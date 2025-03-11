import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

type classDetails = {
  id: number;
  title: string;
};

export default function PassengerPopover({
  setFocuseElement,
  isElementFocused,
}: {
  setFocuseElement: (value: string) => void;
  isElementFocused: (id: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const classDetails: classDetails[] = [
    {
      id: 1,
      title: "Economy",
    },
    {
      id: 2,
      title: "Premiun Economy",
    },
    {
      id: 3,
      title: "Business",
    },
  ];

  const openPopover = () => setOpen(true);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn("bg-gray-100 p-4 rounded-md transition-all duration-100 ease-in-out border-2", isElementFocused("tandc") ? "border-primary" : "")}
          tabIndex={0}
          onClick={() => openPopover()}
          onFocus={() => setFocuseElement("tandc")}
        >
          <p className="font-light text-muted-foreground">Travellers & Class</p>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-auto">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <div className="">
              <p className="font-bold">Travellers</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>Adults</p>
                <p className="text-sm font-light">12yrs or above</p>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                {Array.from({ length: 9 }, (_, i) => {
                  return (
                    <div className={cn("", i === 4 ? "bg-primary text-primary-foreground py-1 px-3 rounded-md": "")}>
                      <p>{1 + i}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <p>Children</p>
                <p className="text-sm font-light">2 - 12 yrs</p>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                {Array.from({ length: 9 }, (_, i) => {
                  return (
                    <div className={cn("", i === 1 ? "bg-primary text-primary-foreground py-1 px-3 rounded-md": "")}>
                      <p>{i}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <p>Infants</p>
                <p className="text-sm font-light">0 - 2 yrs</p>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                {Array.from({ length: 5 }, (_, i) => {
                  return (
                    <div className={cn("", i === 0 ? "bg-primary text-primary-foreground py-1 px-3 rounded-md": "")}>
                      <p>{i}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="">
              <p className="font-bold">Class</p>
            </div>
            <div className="flex flex-wrap flex-row gap-2">
              {classDetails.map((cl) => (
                <div
                  key={cl.title}
                  className={cn(
                    "border-2 px-3 py-2 rounded-full transition-all duration-200 ease-in-out",
                    selectedClassId === cl.id ? "text-primary-foreground bg-primary border-primary" : ""
                  )}
                  onClick={() => setSelectedClassId(cl.id)}
                >
                  <p className="text-sm">{cl.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
