import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./menu";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const headerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    setPrevScrollPos(window.scrollY);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible(isScrollingUp || currentScrollPos < 200);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      variants={headerVariants}
      className={`md:h-48 bg-primary fixed top-0 left-0 w-full z-999 flex flex-col justify-center gap-y-4 p-2 items-center ${isSticky ? "shadow-md bg-primary/90 backdrop-blur-md text-white h-32" : "h-48 bg-transparent"} ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-all duration-350 ease-in-out`}
      animate="animate"
      initial="initial"
    >
      <div
        className={`flex flex-col items-center gap-y-2 select-none cursor-pointer ${isSticky ? "mb-2" : "my-auto"}`}
        onClick={() => {
          navigate({ to: "/" });
        }}
      >
        <p className="text-2xl lg:text-5xl font-bold font-header">ECOTRAVELS</p>
        <p className="lg:text-xl font-header">Discover. Dream. Explore.</p>
      </div>
      <AnimatePresence>{isSticky ? <Menu /> : null}</AnimatePresence>
    </motion.header>
  );
}
