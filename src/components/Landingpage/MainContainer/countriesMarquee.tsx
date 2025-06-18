import { Marquee } from "@/components/magicui/marquee";

type country = {
  id: number;
  title: string;
  url: string;
};

export default function CountriesMarquee() {
  const countriesList: country[] = [
    {
      id: 1,
      title: "India",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
    },
    {
      id: 2,
      title: "NewZealand",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
    },
    {
      id: 3,
      title: "Japan",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
    },
    {
      id: 4,
      title: "Australia",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
    },
    {
      id: 5,
      title: "Germany",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    },
    {
      id: 6,
      title: "France",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    },
    {
      id: 7,
      title: "United States",
      url: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
  ];
  return (
    <div>
      <Marquee className="[--duration:100s]" repeat={20}>
        {countriesList.map((c) => (
          <div key={c.id} className="mx-12 flex flex-row items-center gap-x-4">
            <div className="h-8 w-8 overflow-hidden rounded-md">
              <img alt={c.title} src={c.url} className="grayscale w-full h-full object-cover" />
            </div>

            <p className="font-bold text-xl md:text-2xl tracking-wider text-muted-foreground">{c.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
