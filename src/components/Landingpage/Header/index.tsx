import { Button } from "@/components/ui/button";
import plane4 from "@/assets/plane4.png";

import Menu from "./menu";
export default function Header() {
  return (
    <div className="h-full w-full p-4 flex flex-col md:flex-row md:justify-evenly md:tems-center">
      <div className="flex flex-row items-center justify-center md:justify-normal gap-x-4">
        <img src={plane4} className="w-12 h-12"/>
        <p className="text-3xl font-bold">Eco Travels</p>
      </div>
      <Menu />
      <div className="hidden md:block">
        <Button className="rounded-full">Book Now</Button>  
      </div>
    </div>
  );
}
