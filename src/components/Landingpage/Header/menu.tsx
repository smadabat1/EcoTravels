import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";

type MenuItemItem = {
  id: number;
  title: string;
  url: string;
};

export default function Menu() {
  const navigate = useNavigate();
  const list: MenuItemItem[] = [
    {
      id: 1,
      title: "Flights",
      url: "/flights",
    },
    {
      id: 2,
      title: "Hotels",
      url: "#",
    },
    {
      id: 3,
      title: "Cabs",
      url: "#",
    },
    {
      id: 4,
      title: "Tours & Packages",
      url: "#",
    },
  ];
  return (
    <motion.div
      className={`hidden md:flex flex-row gap-8`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      {list.map((item) => (
        <div
          key={item.id}
          className="group relative cursor-pointer hover:bg-primary/20 px-4 py-2 rounded-full transition-all duration-300 ease-in-out select-none"
          onClick={() => {
            navigate({ to: item.url });
          }}
        >
          <p>{item.title}</p>
        </div>
      ))}
    </motion.div>
  );
}
