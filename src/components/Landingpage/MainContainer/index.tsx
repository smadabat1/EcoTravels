import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function MainPageIndex() {
  const words = ["Experience", "Discover", "Enjoy", "Feel"];
  const navigate = useNavigate();
  
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-screen w-full md:p-0 pt-48 relative overflow-hidden z-200"
      >
        <div className="absolute inset-0 p-4 md:p-0 flex flex-col gap-y-12 justify-center items-center gap-y-8 text-black select-none">
          <div className="transition-all duration-300 ease-out">
            <FlipWords words={words} className="text-5xl 2xl:text-8xl self-center font-bold text-primary dark:text-primary" />
            <p className="text-5xl 2xl:text-8xl font-bold text-black">The magic of Flight!</p>
          </div>
          <p className="2xl:text-xl font-light text-neutral-600">50,000+ Travelers | 45 Countries | Endless Possibilities</p>
          <div
            className="w-48 md:w-96 flex justify-center items-center"
            onClick={() => {
              navigate({ to: "/flights" });
            }}
          >
            <div className="rounded-full px-8 py-4 z-50 cursor-pointer bg-primary w-auto hover:shadow-xl text-primary-foreground transition-all duration-300 ease-in-out">Book a Trip Now</div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
