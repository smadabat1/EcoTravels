import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./menu";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const headerVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={headerVariants}
      className={`md:h-48 bg-primary fixed top-0 left-0 w-full z-999 flex flex-col justify-center gap-y-8 p-4 items-center ${isSticky ? "shadow-md bg-primary/90 backdrop-blur-md text-white h-32" : "h-48 bg-transparent"} transition-all duration-350 ease-in-out`}
      animate="animate"
      initial="initial"
    >
      <AnimatePresence>
        <motion.div
          className="flex flex-col items-center gap-y-2 select-none cursor-pointer"
          onClick={() => {
            navigate({ to: "/" });
          }}
        >
          <p className="text-2xl lg:text-5xl font-bold font-header">ECOTRAVELS</p>
          <p className="lg:text-xl font-header">Discover. Dream. Explore.</p>
        </motion.div>

        {isSticky ? <Menu /> : null}
      </AnimatePresence>
    </motion.header>
  );
}
