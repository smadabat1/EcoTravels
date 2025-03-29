import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import CountriesMarquee from "./countriesMarquee";

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
        className="h-screen w-full pt-48 relative overflow-hidden z-200"
      >
        <div className="w-full h-full p-4 md:p-0 flex flex-col items-center justify-between gap-y-8 select-none">
          <div className="w-full h-full flex flex-col gap-y-12 justify-center items-center">
            <div className="transition-all duration-300 ease-out">
              <FlipWords words={words} className="text-5xl 2xl:text-6xl self-center font-bold text-primary dark:text-primary" />
              <p className="text-5xl 2xl:text-6xl font-bold text-black">The magic of Flight!</p>
            </div>
            <p className="2xl:text-xl font-light text-neutral-600">50,000+ Travelers | 45 Countries | Endless Possibilities</p>
            <div
              className="w-48 md:w-96 flex justify-center items-center"
              onClick={() => {
                navigate({ to: "/flights" });
              }}
            >
              <div className="relative rounded-full px-8 py-4 z-50 cursor-pointer bg-primary w-auto hover:shadow-xl text-primary-foreground transition-all duration-300 ease-in-out">
                <span>Book a Trip Now</span>
                <BorderBeam duration={8} size={50} />
              </div>
            </div>
          </div>
          <div className="w-screen flex flex-col-reverse md:flex-row gap-y-6 items-center p-8">
            <div className="flex flex-row items-center gap-x-8 bg-card shadow-sm px-12 py-6 rounded-full self-auto">
              <p className="font-light text-muted-foreground text-sm">Follow</p>
              <div className="flex flex-row items-center gap-x-6">
                <Instagram
                  className="text-muted-foreground cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/ecotravelsanz/", "_blank", "noopener,noreferrer")}
                />
                <Facebook
                  className="text-muted-foreground cursor-pointer"
                  onClick={() => window.open("https://www.facebook.com/ecotravels.co.nz", "_blank", "noopener,noreferrer")}
                />
                <Twitter
                  className="text-muted-foreground cursor-pointer"
                  onClick={() => window.open("https://x.com/ecotravelsconz", "_blank", "noopener,noreferrer")}
                />
              </div>
            </div>
            <CountriesMarquee />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
