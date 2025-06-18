import { motion } from "framer-motion";

export default function AboutUsIndex() {
  return (
    <div className="px-4 md:px-24 pt-54 min-h-[calc(100vh)] flex flex-col items-center gap-y-12">
      <div>
        <p className="font-bold text-2xl">About Us</p>
      </div>
      <motion.div
        className="text-center flex flex-col gap-y-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="text-xl font-light">Welcome to Eco Travels, your ultimate platform for affordable and sustainable journeys through New Zealand.</p>
        <p className="text-xl font-light">
          With over 14 years of expertise, we turn travel dreams into reality, offering eco-friendly flights and accommodations tailored just for you.
        </p>
      </motion.div>
    </div>
  );
}
