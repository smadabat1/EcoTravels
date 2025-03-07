import { Button } from "@/components/ui/button";
import plane4 from "@/assets/plane4.png";

import Menu from "./menu";
export default function Header() {
  return (
    <div className="h-full w-full p-4 flex flex-row justify-evenly items-center">
      <div className="flex flex-row items-center gap-x-4">
        <img src={plane4} className="w-12 h-12"/>
        <p className="text-3xl font-bold">Eco Travels</p>
      </div>
      <Menu />
      <div>
        <Button className="rounded-full">Book Now</Button>  
      </div>
    </div>
  );
}
