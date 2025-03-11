import { MapPin, Wallet, Ticket, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import flow from "@/assets/flow.webp";

export default function FlowIndex() {
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
  return (
    <div className="flex flex-col gap-y-12 p-8">
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-3xl font-bold">Journey To The Skies Made Simple!</p>
        <p className="font-light text-muted-foreground">
          Effortlessly purchase your ticket and let us craft the perfect itinerary, turning your dream trip into a reality.
        </p>
      </div>
      <div className="grid grid-cols-3 items-end">
        <div className="bg-bento-1 p-4 rounded-l-xl h-[300px] flex flex-col justify-between">
          <MapPin size={28} />
          <p className="font-bold text-2xl">Find your destination</p>
        </div>
        <div className="bg-bento-2 p-4 rounded-t-xl h-[500px] flex flex-col justify-evenly relative overflow-hidden">
          <Ticket className="text-primary-foreground" size={28} />
          <img src={flow} loading="lazy" className="absolute right-[-80px] top-[-80px] rounded-full h-96 w-96 mix-blend-overlay shadow-sm" />
          <div>
            <p className="font-bold text-2xl text-primary-foreground">Book</p>
            <p className="font-bold text-2xl text-primary-foreground">A Ticket</p>
          </div>
          <div className="z-2">
            <p className="text-primary-foreground">Your Adventure Awaits Secure Your Spot &</p>
            <p className="text-primary-foreground"></p>
            <p className="text-primary-foreground">Let Us Handle the Details!</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-xl text-primary-foreground">Know More</p>
            <motion.div variants={pulsateVariants} animate="animate" style={{ display: "inline-flex" }}>
              <ChevronRight className="text-primary-foreground mt-1" />
            </motion.div>
          </div>
        </div>
        <div className="bg-bento-1 p-4 rounded-r-xl h-[300px] flex flex-col justify-between">
          <Wallet size={28} />
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-2xl">Pay &</p>
            <p className="font-bold text-2xl">Start Journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
