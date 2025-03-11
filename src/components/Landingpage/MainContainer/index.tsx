import mainImage from "@/assets/image2.jpg";
import plane from "@/assets/plane1.png";
import { FlipWords } from "@/components/ui/flip-words";

export default function MainPageIndex() {
  const words = ["Experience", "Discover", "Enjoy", "Feel"];
  return (
    <div className="h-[calc(100vh-6rem)] p-8 pt-4 relative overflow-hidden">
      <div className="w-full h-full overflow-hidden" style={{ borderRadius: 80 }}>
        <img src={mainImage} loading="lazy" className="w-full h-full object-cover light:mix-blend-multiply" />
      </div>

      <div className="absolute left-48 top-48 flex flex-col gap-y-8 text-black">
        <p>ELEVATE YOUR TRAVEL JOURNEY</p>
        <div className="transition-all duration-300 ease-out">
          <FlipWords words={words} className="text-5xl lg:text-8xl font-bold text-primary dark:text-primary" />
          <p className="text-5xl lg:text-8xl font-bold text-black">
            The magic of
          </p>
          <p className="text-5xl lg:text-8xl font-bold text-black">Flight!</p>
        </div>
        <div className="w-full lg:w-48">
          <div className="rounded-full px-8 py-4 z-50 cursor-pointer bg-primary w-auto hover:shadow-sm text-primary-foreground">Book a Trip Now</div>
        </div>
      </div>
      <div className="hidden absolute right-0 top-[-100px] lg:flex flex-col gap-y-8">
        <img
          src={plane}
          loading="lazy"
          className="w-[400px] h-[400px] transition-all duration-300 ease-out xl:w-[1000px] lg:h-[1000px] object-contain opacity-98 mix-blend-normal"
        />
      </div>
    </div>
  );
}
