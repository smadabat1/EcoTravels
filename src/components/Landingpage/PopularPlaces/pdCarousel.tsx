import { Carousel, CarouselContent, CarouselItem, CarouselApi} from "@/components/ui/carousel";
import amritsar from "@/assets/carousel/amritsar.jpg";
import delhi from "@/assets/carousel/delhi.jpg";
import mumbai from "@/assets/carousel/mumbai.jpg";
import trivandrum from "@/assets/carousel/trivandrum.jpg";
import cochin from "@/assets/carousel/cochin.jpg";
import hyderabad from "@/assets/carousel/hyderabad.jpg";
import chennai from "@/assets/carousel/chennai.jpg";
import bangalore from "@/assets/carousel/bangalore.jpg";
import ahmedabad from "@/assets/carousel/ahmedabad.jpg";

type cityType = {
  id: number;
  name: string;
  price: string;
  currency: string;
  img: string
};

export default function PdCarousel({ setApi }: { setApi: (api: CarouselApi) => void}) {
  const citiesDetails: cityType[] = [
    {
      id: 1,
      name: "Amritsar",
      price: "1489",
      currency: "NZD",
      img: amritsar
    },
    {
      id: 2,
      name: "Delhi",
      price: "1489",
      currency: "NZD",
      img: delhi
    },
    {
      id: 3,
      name: "Mumbai",
      price: "1489",
      currency: "NZD",
      img: mumbai
    },
    {
      id: 4,
      name: "Trivandrum",
      price: "1389",
      currency: "NZD",
      img: trivandrum
    },
    {
      id: 5,
      name: "Cochin",
      price: "1499",
      currency: "NZD",
      img: cochin
    },
    {
      id: 6,
      name: "Hyderabad",
      price: "1519",
      currency: "NZD",
      img: hyderabad
    },
    {
      id: 7,
      name: "Chennai",
      price: "1509",
      currency: "NZD",
      img: chennai
    },
    {
      id: 8,
      name: "Bengaluru",
      price: "1529",
      currency: "NZD",
      img: bangalore
    },
    {
      id: 9,
      name: "Ahmedabad",
      price: "1589",
      currency: "NZD",
      img: ahmedabad
    },
  ];

  return (
    <Carousel setApi={setApi} className="w-full" opts={{dragFree: true}}>
      <CarouselContent>
        {citiesDetails.map((city) => (
          <CarouselItem key={city.id} className="basis-full transition-all delay-300 ease-in-out lg:basis-1/4">
            <div className="p-1">
              <div className="p-4 flex flex-col gap-y-4">
                <div className="w-full h-48 border rounded-xl overflow-hidden">
                    <img src={city.img} loading="lazy" />
                </div>
                <div className="flex flex-row items-center justify-between cursor-pointer group">
                    <p className="font-bold">{city.name}</p>
                    <div className="px-4 py-2 bg-primary rounded-xl">
                        <p className="text-primary-foreground font-bold">{city.price} <span className="text-xs font-normal">{city.currency}</span></p>
                    </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
