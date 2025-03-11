import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Rahul Rajeev",
    username: "@rahul",
    body: "Keerthi and Eco Travels have provided great support in booking tickets for our family travel without any hassle. The communication has been outstanding and provided a great deal within a good budget. Thank you and we shall definitely book with Eco travels in future.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: " Karthick Subramani",
    username: "@karthik",
    body: " Srikanth was fantastic! He helped me find the best deals on flights, and were able to answer all of my questions about the booking process. He made everything so easy, and I couldn't be happier with the service I received. I would highly recommend them to anyone looking to book travel. ",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Raj dhabi",
    username: "@rajd",
    body: " Friendly, helpful & efficient service from Anurag -Eco Travel staff. we had another great trip booking through travel. A great package with so many inclusions & such a bargain. looking for our next overseas trip to book with you ",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Ravi J",
    username: "@ravi",
    body: " Many thanks to Maseera Begum for her exceptional service in helping us plan our annual travels. She has consistently displayed great politeness and responsiveness, always providing us with the best deals. Last year, I had to change our travel dates multiple times, and Maseera's assistance during the ticket booking process was invaluable. ",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Singam Manasa",
    username: "@singammanasa",
    body: " Great Experience with (TA). Travel agent Prashanth helped a lot to get it done quickly. I found very easy the way he gave me all information for book my flight. I very strongly advise other traveller to use (TA). its very friendly and easy to use. Thank you very much ",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Hari Talreja",
    username: "@hari",
    body: "I booked 3 segments of travel for my family with Ecotravels. Prabhakar from their back office in India was very good. He was prompt in his responses, and good with communication on what's app. Even though price-wise you may not get it cheaper than some of the travel website, it was good to be able to communicate with someone about my requirements and get immediate answers. I will be happy to book my future trips with him. ",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: " Jayan Unnithan",
    username: "@jayanunnithan",
    body: " We booked through Eco Travels Sandringham for a 4-night holiday trip to Dubai. The hotel bookings, transfers, and attraction and activity passes were all managed by their holiday booking division agent Ashish Nagaich (WhatsApp number +64-220270526) who did a very nice job coordinating our entire trip. He was in constant touch with us each day and made sure we had a stress-free holiday experience. Would highly recommend to anyone who would like to plan a hassle-free holiday for their family. ",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Bibek Gurung",
    username: "@bibekgurung",
    body: "Good communication, I was helped by Sunny and he was great in terms of gathering information and relaying back to me. The whole reason for us to look for an agent is to get things done and get it done fast and smooth, thats exactly what I got. Pretty good.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Manpreet Singh",
    username: "@manpreetsingh",
    body: "I am in contact with Prasanth since 2019 and his customer services are stunning and thanks Prasanth for always looking after our travels requirements. I am happy to support and take services regarding air travels from you.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-sm",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 select-none">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ReviewsIndex() {
  return (
    <div className="flex flex-col gap-y-4 p-8">
      <div className="flex flex-col gap-y-2">
        <p className="text-3xl font-bold">Rave Reviews from Our Happy Travelers!</p>
        <p className="font-light text-muted-foreground">
          Discover what makes our travel experiences unforgettable as our delighted customers share their journey highlights and heartwarming stories.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:100s]" repeat={10}>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
