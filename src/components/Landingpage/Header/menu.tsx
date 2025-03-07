type MenuItemItem = {
  id: number;
  title: string;
};

export default function Menu() {
  const list: MenuItemItem[] = [
    {
      id: 1,
      title: "Flights",
    },
    {
      id: 2,
      title: "Hotels",
    },
    {
      id: 3,
      title: "Cabs",
    },
    {
      id: 4,
      title: "Tours & Packages",
    },
  ];
  return (
    <div className="flex flex-row gap-8">
      {list.map((item) => (
        <div key={item.id} className="group relative cursor-pointer hover:bg-primary/20 px-4 py-2 rounded-full transition-all duration-300 ease-in-out">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
