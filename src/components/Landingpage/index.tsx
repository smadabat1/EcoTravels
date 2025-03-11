import { useEffect } from "react"
import MainPageIndex from "./MainContainer"
import PopularPlacesIndex from "./PopularPlaces"
import { BentoGridSecondDemo } from "./Stats"
import { ReviewsIndex } from "./Reviews";
import FlowIndex from "./Flow";

export default function LandingPageIndex() {
  useEffect(() => {
    //initially when rendered scroll to the top. 
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);
  
  return (
    <div className="flex flex-col gap-y-24 px-4 md:px-24">
        <MainPageIndex />
        <PopularPlacesIndex />
        <BentoGridSecondDemo />
        <ReviewsIndex />
        <FlowIndex />
    </div>
  )
}
