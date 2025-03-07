import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconSignature } from "@tabler/icons-react";
import { User, Sparkles } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { cn } from "@/lib/utils";

export function BentoGridSecondDemo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-center items-center">
        <p className="font-bold text-3xl">Highlights</p>
      </div>
      <BentoGrid className="md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
        ))}
      </BentoGrid>
    </div>
  );
}

const NumberTickerWrapper = ({ value, classes }: { value: number; classes?: string }) => {
  return <NumberTicker value={value} className={cn("whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white", classes)} />;
};

const items = [
  {
    title: "Customer Happiness",
    description: "Thousands of smiles, memories, and remarkable travel experiences crafted annually.",
    header: <NumberTickerWrapper value={34000} />,
    className: "md:col-span-2 bg-bento-1",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "Legacy of Travel",
    description: "Years of dedicated service, connecting travelers with their dream destinations.",
    header: <NumberTickerWrapper value={14} classes={"text-white"} />,
    className: "md:col-span-1 bg-bento-3 text-white",
    icon: <IconSignature className="h-4 w-4" />,
  },
  {
    title: "World Travelers Discovering Us",
    description: "Hundreds of travel enthusiasts embark on their dream journeys with us weekly.",
    header: <NumberTickerWrapper value={7324} classes={"text-white"} />,
    className: "md:col-span-3 bg-bento-2 text-white",
    icon: <User className="h-4 w-4 text-white" />,
  },
];
