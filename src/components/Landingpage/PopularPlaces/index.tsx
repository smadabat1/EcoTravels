import PdCarousel from "./pdCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CarouselApi} from "@/components/ui/carousel";

export default function PopularPlacesIndex() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const prevHandler = () => {
    if(api?.canScrollPrev()){
      api.scrollPrev()
    }
  }

  const nextHandler = () => {
    if(api?.canScrollNext()) {
      api.scrollNext()
    }
  }

  return (
    <div className="p-8 flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <p className="text-3xl font-bold">Popular Destination</p>
          <p className="font-light text-muted-foreground">Unleash Your Wanderlust with EcoTravels</p>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <div className="p-3 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer" onClick={prevHandler}>
            <ChevronLeft />
          </div>
          <div className="p-4 flex justify-center items-center rounded-full cursor-pointer bg-black text-white" onClick={nextHandler}>
            <ChevronRight />
          </div>
        </div>
      </div>

      <PdCarousel setApi={setApi}/>
    </div>
  );
}
