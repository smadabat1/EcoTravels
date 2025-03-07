import MainPageIndex from "./MainContainer"
import PopularPlacesIndex from "./PopularPlaces"
import ReviewIndex from "./Reviews"
import { BentoGridSecondDemo } from "./Stats"

export default function LandingPageIndex() {
  return (
    <div className="flex flex-col gap-y-24 px-24">
        <MainPageIndex />
        <PopularPlacesIndex />
        <BentoGridSecondDemo />
    </div>
  )
}
