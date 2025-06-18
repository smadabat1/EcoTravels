import { MapPin, Wallet, Ticket, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import flow from "@/assets/flow.webp";
import { useRef } from "react";

export default function FlowIndex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  //const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.6]);

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
    <motion.div
      className="flex flex-col gap-y-12 md:p-8"
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-3xl font-bold">Journey To The Skies Made Simple!</p>
        <p className="font-light text-muted-foreground">
          Effortlessly purchase your ticket and let us craft the perfect itinerary, turning your dream trip into a reality.
        </p>
      </div>
      <div ref={container} className="grid grid-cols-1 md:grid-cols-3 md:items-end gap-4 md:gap-0">
        <motion.div style={{ opacity: opacity }} className="bg-bento-1 p-4 rounded-xl md:rounded-l-xl h-[300px] flex flex-col justify-between">
          <MapPin size={28} />
          <p className="font-bold text-2xl">Find your destination</p>
        </motion.div>
        <motion.div
          style={{ opacity: opacity }}
          className="bg-bento-2 p-4 rounded-xl md:rounded-t-xl h-[500px] flex flex-col justify-evenly relative overflow-hidden"
        >
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
        </motion.div>
        <motion.div style={{ opacity: opacity }} className="bg-bento-1 p-4 rounded-xl md:rounded-r-xl h-[300px] flex flex-col justify-between">
          <Wallet size={28} />
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-2xl">Pay &</p>
            <p className="font-bold text-2xl">Start Journey</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
