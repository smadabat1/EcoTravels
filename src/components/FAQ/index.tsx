import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type faqType = {
  id: number;
  title: string;
  content: string;
};

export default function FAQIndex() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const items: faqType[] = [
    {
      id: 1,
      title: "Does Eco Travels allow me to book tickets for infants?",
      content:
        "Yes, we allow you to book tickets for babies under the age of two i.e 24 months. However, you need to carry a valid proof of their age while checking-in. Of course, the baby needs to be accompanied by an individual over the age of 18. We permit flight booking of only one infant per adult. This includes both outbound and return journeys. If the infant is 24 months or above during the return journey, you need to make a separate booking using child fare.",
    },
    {
      id: 2,
      title: "What is an e-ticket?",
      content:
        "An electronic ticket or e-ticket is a paperless electronic document with a unique confirmation number that replaces the hassles of a printed paper ticket. When you purchase an e-ticket, we email it to you within 30 minutes of your booking. You need to print and carry it, along with a valid photo ID, to the airline counter while checking-in.",
    },
    {
      id: 3,
      title: "What is the maximum number of seats I can book?",
      content:
        "A maximum of 9 seats can be booked at one time. If you need to book more than 9 tickets, you need to redo the entire process. However, the fares are dynamic, we cannot give any kind of assurance that the same fare or seats will be available in the same flight for other passengers (+9)",
    },
    {
      id: 4,
      title: "How do I know my ticket is booked?",
      content:
        "We will send you an SMS as well as email confirming your flight ticket booking. In case the payment is captured and you haven't received the ticket copy, kindly call or email the customer support agent to confirm whether the ticket has been issued or not.",
    },
    {
      id: 5,
      title: "Do I need to confirm my flight reservation before I travel?",
      content:
        "We do pre-book seats, but some airlines confirm your seat assignments. Their rules for doing so vary. You can directly call the airline to check whether or not you can choose your seat.",
    },
    {
      id: 6,
      title: "How do I confirm my seat assignments?",
      content:
        "We will send you an SMS as well as email confirming your flight ticket booking. In case the payment is captured and you haven't received the ticket copy, kindly call or email the customer support agent to confirm whether the ticket has been issued or not.",
    },
    {
      id: 7,
      title: "How do I get my ticket details?",
      content: "We share the e-ticket details on the email address you provided during reservation. ",
    },
    {
      id: 8,
      title: "How do I get a boarding pass for a ticket?",
      content:
        "Your boarding pass will be issued by the airline, when you check-in online or at the airport. Web check-in can be done before 24 to 48 hours of your departure (varies from airline to airline). To check-in online, you need to share a 6-digit airline confirmation code (PNR) that is available in your itinerary. You can also get a boarding pass from a check-in kiosk or the ticketing agent when you arrive at the airport. ",
    },
    {
      id: 9,
      title: "Do I have to show my e-ticket at the airline check-in counter?",
      content:
        "Some airports allow you inside without a printout of your e-ticket, while others don't. Hence, it is advised that you carry a copy of your e-ticket.",
    },
    {
      id: 10,
      title: "What if my e-ticket is lost?",
      content:
        "If this happens, email us immediately and we'll share a copy of your e-ticket instantly. You can also visit the airport counter of the concerned airline and request for an e-ticket copy which might incur some cost. In case you are not permitted to enter the airport, we can SMS your PNR on your registered mobile number, which you can show to allow yourself in. However, this facility differs from airport to airport (not all airport will permit entry with the SMS).",
    },
    {
      id: 11,
      title: "How do I cancel a flight reservation?",
      content:
        "You can cancel the ticket from website using these steps: Manage Booking-> Enter your Booking ID -> Enter OTP sent on your registered mobile number-> Click on Cancel. Once you do this, your booking will be cancelled instantly. In case of web check-in, call or email us before cancelling. If you are not able to do so, then you need to either send us an email on support@ecotravels.travel or call 8080 266 266 to cancel your flight reservations. We permit ticket cancellation prior to your flight, but the cancellation policies differ from airline to airline.",
    },
  ];
  return (
    <div className="px-4 md:px-24 pt-54 min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-y-12">
      <div className="flex justify-center">
        <p className="self-center  font-bold text-2xl">Frequently Asked Question's</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
