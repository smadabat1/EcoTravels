import { Marquee } from "@/components/magicui/marquee";

type country =  {
    id: number,
    title: string
}

export default function CountriesMarquee() {

    const countriesList: country[] = [
        {
            id: 1,
            title: "India"
        },
        {
            id: 2,
            title: "NewZealand"
        },
        {
            id: 3,
            title: "Japan"
        },
        {
            id: 4,
            title: "Australia"
        },
        {
            id: 5,
            title: "Germany"
        },
        {
            id: 6,
            title: "France"
        },
        {
            id: 7,
            title: "United Kingdom"
        }
    ]
  return (
    <div>
      <Marquee className="[--duration:100s]" repeat={20}>
        {countriesList.map((c) => (
          <div key={c.id} className="mx-24">
            <p className="font-bold text-3xl tracking-wider text-muted-foreground">{c.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
