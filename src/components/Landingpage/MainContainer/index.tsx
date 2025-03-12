import mainImage from "@/assets/image2.jpg";
import plane from "@/assets/plane1.webp";
import { FlipWords } from "@/components/ui/flip-words";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MainPageIndex() {
  const words = ["Experience", "Discover", "Enjoy", "Feel"];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const yMovement = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ["10%", "0%", "-10%"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.6]);

  return (
    <div ref={container} className="h-[calc(100vh-6rem)] md:p-0 relative overflow-hidden rounded-xl">
      <motion.div
        style={{
          y: yMovement,
          scale: scale,
          opacity: opacity,
        }}
        className="w-full h-full overflow-hidden absolute inset-0"
      >
        <img src={mainImage} loading="lazy" className="w-full h-screen object-cover rounded-xl light:mix-blend-multiply" />
      </motion.div>

      <div className="absolute left-8 top-48 m-auto md:left-48 md:top-48 flex flex-col gap-y-8 text-black select-none">
        <p>ELEVATE YOUR TRAVEL JOURNEY</p>
        <div className="transition-all duration-300 ease-out">
          <FlipWords words={words} className="text-5xl lg:text-8xl font-bold text-primary dark:text-primary" />
          <p className="text-5xl lg:text-8xl font-bold text-black">The magic of</p>
          <p className="text-5xl lg:text-8xl font-bold text-black">Flight!</p>
        </div>
        <div className="w-48">
          <div className="rounded-full px-8 py-4 z-50 cursor-pointer bg-primary w-auto hover:shadow-sm text-primary-foreground">Book a Trip Now</div>
        </div>
      </div>
      <div className="hidden absolute right-0 top-[-100px] lg:flex flex-col gap-y-8">
        <img
          src={plane}
          loading="lazy"
          className="w-[400px] h-[400px] transition-all duration-300 ease-out hidden 2xl:block 2xl:w-[1000px] 2xl:h-[1000px] object-contain opacity-98 mix-blend-normal"
        />
      </div>
    </div>
  );
}
